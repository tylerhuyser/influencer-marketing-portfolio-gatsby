export const onRenderBody = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ lang: "en" });
  setBodyAttributes({ className: "my-body-class" });
};