import { useEffect } from "react";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (window.hbspt) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "145558102",
          formId: "e3c5a804-0ad4-4461-98ae-8d30da1d57c5",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <>
      <div id="hubspotForm"></div>
    </>
  );
};

export default HubspotContactForm;
