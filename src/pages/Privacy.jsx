import React from "react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const paragraphs = t("privacy.content").split("\n");
  return (
    <div
      className="max-w-2xl mx-auto px-4 py-16 text-[#013024] bg-white/90 rounded-2xl shadow-lg mt-10 mb-10 border-2 border-[#a7ec4f]"
      dir={isArabic ? "rtl" : "ltr"}
      style={isArabic ? { textAlign: "right" } : { textAlign: "left" }}
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center tracking-tight">
        {t("privacy.title")}
      </h1>
      <div className="space-y-6 text-lg leading-relaxed">
        {paragraphs.map((p, idx) =>
          p.includes("info@earningsync.com") ? (
            <p key={idx}>
              {p.replace("info@earningsync.com", "")}
              <a
                href="mailto:info@earningsync.com"
                className="text-[#000000] underline hover:text-[#013024]"
              >
                info@earningsync.com
              </a>
            </p>
          ) : (
            <p key={idx}>{p}</p>
          )
        )}
      </div>
    </div>
  );
};

export default Privacy;
