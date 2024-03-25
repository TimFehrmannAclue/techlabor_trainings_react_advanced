// We customize some react components to pass config parameters to the styling like f.e. in PageBody
// These should be removed afterward as they are not required in the dom but there are open issues with styled-components.
// So we filter out all transient-props, which should always start with $.
const removeTransientProps = { shouldForwardProp: (prop: string) => prop[0] !== '$' };
export default removeTransientProps;
