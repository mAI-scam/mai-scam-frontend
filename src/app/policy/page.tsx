"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  FileText,
  Lock,
  Eye,
  Database,
  Globe,
  Users,
} from "lucide-react";
import Header from "@/components/main/Header";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 md:px-6 pb-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-8 md:mb-12 mx-auto">
          <div className="font-bold mb-4 md:mb-6 py-4 md:py-6 w-full max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#49A4EF] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Learn how the <span className="text-[#49A4EF]">m</span>
              <span className="text-[#EB6700]">AI</span>
              <span className="text-[#49A4EF]">scam</span> app extension handles
              your data.
            </p>
          </div>
        </section>

        {/* Policy Introduction */}
        <section className="mb-8 max-w-5xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm text-blue-800 leading-relaxed">
              This privacy policy applies to the maiscam app extension app
              (hereby referred to as &quot;Application&quot;) for mobile devices
              that was created by maiscam (hereby referred to as &quot;Service
              Provider&quot;) as a Free service. This service is intended for
              use &quot;AS IS&quot;.
            </p>
          </div>
        </section>

        {/* Information Collection and Use */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Database className="h-8 w-8 text-[#49A4EF]" />
                Information Collection and Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Application collects information when you download and use
                it. This information may include information such as
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • Your device&apos;s Internet Protocol address (e.g. IP
                  address)
                </li>
                <li>
                  • The pages of the Application that you visit, the time and
                  date of your visit, the time spent on those pages
                </li>
                <li>• The time spent on the Application</li>
                <li>• The operating system you use on your mobile device</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Application does not gather precise information about the
                location of your mobile device.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider may use the information you provided to
                contact you from time to time to provide you with important
                information, required notices and marketing promotions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For a better experience, while using the Application, the
                Service Provider may require you to provide us with certain
                personally identifiable information, including but not limited
                to Email. The information that the Service Provider request will
                be retained by them and used as described in this privacy
                policy.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Third Party Access */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Eye className="h-8 w-8 text-[#49A4EF]" />
                Third Party Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Only aggregated, anonymized data is periodically transmitted to
                external services to aid the Service Provider in improving the
                Application and their service. The Service Provider may share
                your information with third parties in the ways that are
                described in this privacy statement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider may disclose User Provided and
                Automatically Collected Information:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • as required by law, such as to comply with a subpoena, or
                  similar legal process;
                </li>
                <li>
                  • when they believe in good faith that disclosure is necessary
                  to protect their rights, protect your safety or the safety of
                  others, investigate fraud, or respond to a government request;
                </li>
                <li>
                  • with their trusted services providers who work on their
                  behalf, do not have an independent use of the information we
                  disclose to them, and have agreed to adhere to the rules set
                  forth in this privacy statement.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Opt-Out Rights */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-[#49A4EF]" />
                Opt-Out Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                You can stop all collection of information by the Application
                easily by uninstalling it. You may use the standard uninstall
                processes as may be available as part of your mobile device or
                via the mobile application marketplace or network.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Data Retention Policy */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Database className="h-8 w-8 text-[#49A4EF]" />
                Data Retention Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider will retain User Provided data for as long
                as you use the Application and for a reasonable time thereafter.
                If you&apos;d like them to delete User Provided Data that you
                have provided via the Application, please contact them at
                info.maiscam@gmail.com and they will respond in a reasonable
                time.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Children */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Users className="h-8 w-8 text-[#49A4EF]" />
                Children
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider does not use the Application to knowingly
                solicit data from or market to children under the age of 13.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider does not knowingly collect personally
                identifiable information from children. The Service Provider
                encourages all children to never submit any personally
                identifiable information through the Application and/or
                Services. The Service Provider encourage parents and legal
                guardians to monitor their children&apos;s Internet usage and to
                help enforce this Policy by instructing their children never to
                provide personally identifiable information through the
                Application and/or Services without their permission. If you
                have reason to believe that a child has provided personally
                identifiable information to the Service Provider through the
                Application and/or Services, please contact the Service Provider
                (info.maiscam@gmail.com) so that they will be able to take the
                necessary actions. You must also be at least 16 years of age to
                consent to the processing of your personally identifiable
                information in your country (in some countries we may allow your
                parent or guardian to do so on your behalf).
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Security */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Lock className="h-8 w-8 text-[#49A4EF]" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider is concerned about safeguarding the
                confidentiality of your information. The Service Provider
                provides physical, electronic, and procedural safeguards to
                protect information the Service Provider processes and
                maintains.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Changes */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <FileText className="h-8 w-8 text-[#49A4EF]" />
                Changes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy may be updated from time to time for any
                reason. The Service Provider will notify you of any changes to
                the Privacy Policy by updating this page with the new Privacy
                Policy. You are advised to consult this Privacy Policy regularly
                for any changes, as continued use is deemed approval of all
                changes.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 font-semibold">
                  This privacy policy is effective as of 2025-09-07
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Consent */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-[#49A4EF]" />
                Your Consent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                By using the Application, you are consenting to the processing
                of your information as set forth in this Privacy Policy now and
                as amended by us.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Us */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Globe className="h-8 w-8 text-[#49A4EF]" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions regarding privacy while using the
                Application, or have questions about the practices, please
                contact the Service Provider via email at
                info.maiscam@gmail.com.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-6 md:py-8 mt-12 md:mt-16 border-t">
        <div className="text-center text-muted-foreground">
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} maiscam. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            This privacy policy applies to the maiscam app extension.
          </p>
        </div>
      </footer>
    </div>
  );
}
