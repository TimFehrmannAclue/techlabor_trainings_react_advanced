import {Express} from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import generateTypeObjects from "./generateTypeObjects";

const TYPE_DIR = 'type/frontend';
const TSCONFIG_FILE = 'tsconfig.json';
export default function setupSwagger(app: Express): void {
    const swaggerOptions = {
        swaggerDefinition: {
            info: {
                title: 'Login API',
                version: '1.0.0',
                description: 'Documentation for the Login API',
            },
            openapi: "3.0.0",
            ...getFrontendTypesForSwaggerDefinition(TYPE_DIR, TSCONFIG_FILE),
        },
        apis: ['src/endpoint/**/*.ts'],
    }

    const specs = swaggerJSDoc(swaggerOptions);

    // Serve Swagger UI
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
    // Serve Swagger JSON
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(specs);
    });
}

function getFrontendTypesForSwaggerDefinition(typeDir: string, tsConfigFile: string): {
    components: swaggerJSDoc.Options["components"],
    paths: swaggerJSDoc.Options["paths"]
} {
    const dummySchemaName = "DummySchema";
    const typeJsons = generateTypeObjects(typeDir, tsConfigFile);
    return {
        components: {
            schemas: {
                // Combining all additional types so that they can be referenced by one dummy endpoint
                [dummySchemaName]: {
                    "allOf": typeJsons.map(({name}) => ({["$ref"]: `#/components/schemas/${name}`})),
                },
                // Adding all additional types to schemas
                ...Object.fromEntries(typeJsons.map(({name, obj}) => [name, obj])),
            }
        },
        // Linking additional types with dummy endpoint to have them included in frontend rtk client
        paths: {
            "/dummy": {
                "post": {
                    "responses": {
                        "403": {
                            "description": "This endpoint does not exist and is included for type generation only",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": `#/components/schemas/${[dummySchemaName]}`
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

