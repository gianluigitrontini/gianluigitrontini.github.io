// @ts-ignore
import pdfMake from "pdfmake/build/pdfmake.min";
import { pdfFonts } from "../assets/fonts-pdf/vfs_fonts";
import { base64ProfileImage } from "../assets/logo-base64";
import { qrCodeBase64 } from "../assets/qr-code-base64";
import { linkedinBase64, githubBase64 } from "../assets/cv-icons-base64";
import { useEffect } from "react";

const PdfGenerator = ({
  professionalExperiences,
  showPdfViewer = false,
}: {
  professionalExperiences: any;
  showPdfViewer?: boolean;
}) => {
  const experiences = professionalExperiences
    .reverse()
    .sort((a: any, b: any) => {
      return a.data.date.split("-").join("") > b.data.date.split("-").join("")
        ? -1
        : 1;
    });

  pdfMake.vfs = pdfFonts;
  pdfMake.fonts = {
    SequelSans: {
      normal: "Sequel-Sans-Light.ttf",
      bold: "Sequel-Sans-Medium.ttf",
    },
  };

  const generatePdf = ({ showPdfViewer }: { showPdfViewer: boolean }) => {
    const professionalExperience = experiences.map(
      (experience: any, i: number) => {
        // Generate the structure for PDF
        return [
          {
            text: `${experience.data.dates}`,
            margin: [0, 10, 0, 0],
          },
          {
            text: experience.data.company,
            bold: true,
            margin: [0, 0, 0, 0],
          },
          {
            text: `${experience.data.role}`,
            margin: [0, 5, 0, 0],
          },
          {
            ul: experience.data.bulletPoints.map((bulletPoint: string) => {
              return { text: `${bulletPoint}`, margin: [0, 5, 0, 0] };
            }),
            margin: [0, 5, 0, 0],
          },
          {
            text: `Tech Stack: ${experience.data.technologies.join(", ")}`,
            margin: [0, 5, 0, 0],
          },
        ];
      }
    );

    var dd = {
      info: {
        title: "CV_Gianluigi_TRONTINI",
        author: "Gianluigi Trontini",
      },
      pageMargins: [20, 20, 20, 10],
      content: [
        {
          columns: [
            {
              image: base64ProfileImage,
              width: 75,
            },
            {
              stack: [
                {
                  text: "Gianluigi Trontini",
                  style: "header",
                },
                {
                  text: "Software Developer",
                  margin: [0, 1, 0, 0],
                },
                {
                  text: "21/10/1996 | San Benedetto del Tronto, Italy",
                  margin: [0, 1, 0, 0],
                },
                {
                  text: "gianluigitrontini@gmail.com | +39 3806816204",
                  margin: [0, 1, 0, 0],
                },
              ],
              margin: [15, 10, 0, 0],
            },
            {
              image: qrCodeBase64,
              width: 75,
              margin: [0, 0, 0, 0],
            },
            {
              text: "",
              width: "25",
            },
          ],
        },
        {
          columns: [
            {
              columns: [
                {
                  image: linkedinBase64,
                  width: 14,
                },
                { text: "Gianluigi Trontini", margin: [5, 0, 0, 0] },
              ],
            },
            {
              columns: [
                {
                  image: githubBase64,
                  width: 14,
                },
                {
                  text: "github.com/gianluigitrontini",
                  margin: [5, 0, 0, 0],
                },
              ],
            },
            {
              text: "gianluigitrontini.github.io",
              style: {
                alignment: "right",
              },
            },
          ],
          margin: [0, 10, 0, 0],
        },
        {
          text: "Professional Experience",
          style: "header",
          margin: [0, 10, 0, 0],
        },
        ...professionalExperience,
        {
          text: "Education",
          style: "header",
          margin: [0, 10, 0, 0],
        },
        {
          text: "2015 | Graduated from Liceo Artistico O. Licini - 93/100",
          margin: [0, 5, 0, 0],
        },
        {
          text: "2017 | Started studying Industrial Design at Unicam (Ascoli Piceno). Led by a lifelong passion for technology, during the course I started self-learning programming and web development, which led me to pause my formal studies and pursue a career in tech.",
          margin: [0, 5, 0, 70],
        },
        {
          stack: [
            "I agree to this CV being kept on file and distributed for employment purposes.",
            {
              text: "This CV has been generated automatically using Javascript based on the content on my online portfolio. Check it out!",
            },
            "",
          ],
          style: {
            alignment: "center",
            fontSize: 8,
          },
        },
      ],
      defaultStyle: {
        fontSize: 10,
        font: "SequelSans",
      },
      styles: {
        header: {
          fontSize: 12,
          bold: true,
          alignment: "justify",
        },
      },
    };

    // const pdfDoc = pdfMake.createPdf(dd);

    // Download the PDF

    // {
    //   showPdfViewer == false && pdfDoc.download("CV_Gianluigi_TRONTINI.pdf");
    // }

    // Show the PDF in the viewer (only if current page is "curriculum")
    // {
    //   showPdfViewer == true &&
    //     pdfDoc.getDataUrl((dataUrl: string) => {
    //       const targetElement = document.querySelector("#pdfContainer");
    //       if (!targetElement?.firstChild) {
    //         const iframe = document.createElement("iframe");
    //         iframe.src = dataUrl;
    //         targetElement?.appendChild(iframe);
    //       }
    //     });
    // }
  };

  useEffect(() => {
    showPdfViewer == true && generatePdf({ showPdfViewer });
  }, []);

  return (
    <section>
      <div className="max-w-5xl mx-auto my-4 flex">
        <button
          id="download-pdf"
          className="border-2 border-black p-2 mx-auto"
          onClick={() => generatePdf({ showPdfViewer })}
        >
          Download CV
        </button>
      </div>

      {showPdfViewer == true && (
        <div id="pdfContainer" className="w-screen h-[90vh]"></div>
      )}
    </section>
  );
};

export default PdfGenerator;
