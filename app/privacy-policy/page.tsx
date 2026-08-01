import type { Metadata } from "next";
import PrivacyPolicy from "@/components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy — Aqualingua",
  description:
    "How Aqualingua collects, uses, shares, and protects your personal information.",
};

export default function Page() {
  return <PrivacyPolicy />;
}
