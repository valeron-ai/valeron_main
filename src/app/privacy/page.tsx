import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Valeron",
  description: "Valeron, Inc. Privacy Policy",
};

const linkClass =
  "text-white underline underline-offset-4 hover:text-neutral-300 transition-colors";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#141414]">
      {/* Header */}
      <header className="border-b border-neutral-800 px-8 py-6 md:px-16 lg:px-32">
        <Link href="/">
          <Image
            src="/assets/valeron-wordmark.png"
            alt="VALERON"
            width={160}
            height={28}
            className="h-auto w-24"
          />
        </Link>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-8 py-16 md:px-16 md:py-24">
        <h1 className="text-3xl font-semibold uppercase tracking-wider text-white md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-base text-neutral-400">Valeron, Inc.</p>
        <p className="mt-2 text-sm text-neutral-500">
          Last Updated: March 3, 2026
        </p>

        <div className="mt-12 border-t border-neutral-800 pt-12 text-base leading-7 text-neutral-400 md:mt-16 md:pt-16">
          <p>
            This Privacy Policy describes how Valeron, Inc.
            (&ldquo;Valeron,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) collects, uses, and shares your personal
            information when you use our ACE (Automated Capture Experience)
            autonomous golf capture robot, our mobile application, our website
            at valeron.ai, and related data services (collectively, the
            &ldquo;Services&rdquo;). This Privacy Policy also describes the
            choices you may have regarding our use of your personal information.
          </p>

          <p className="mt-6">
            In this Privacy Policy, we refer to registered users of our Services
            as &ldquo;Players.&rdquo;
          </p>

          <p className="mt-6">
            As used in this Privacy Policy, &ldquo;de-identified&rdquo; means
            information that cannot reasonably be used to infer information
            about, or otherwise be linked to, a particular consumer or
            household. When we describe data as de-identified, we mean that we
            have taken reasonable measures to ensure the data is not linkable to
            you or your Valeron account, and we maintain and use such data
            without attempting to re-identify it, except for the purpose of
            determining whether our de-identification processes are adequate.
          </p>

          <p className="mt-6">
            By creating an account, using the ACE robot, accessing our mobile
            application, or visiting our website, you acknowledge that you have
            read and understand this Privacy Policy. We may update this Privacy
            Policy from time to time, and we encourage you to review it
            periodically. If we make material changes, we will notify you
            through the Services or by other means.
          </p>

          {/* Notice at Collection */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              Notice at Collection
            </h2>
            <p className="mt-6">
              The following table summarizes, for each category of personal
              information we collect, the purposes for collection, whether the
              category is sold or shared, and the categories of third parties or
              service providers that receive it. For more detail on each item,
              please refer to the corresponding sections of this Privacy Policy.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="py-3 pr-4 text-left font-semibold text-neutral-200">
                      Category of PI
                    </th>
                    <th className="py-3 pr-4 text-left font-semibold text-neutral-200">
                      Purposes
                    </th>
                    <th className="py-3 pr-4 text-left font-semibold text-neutral-200">
                      Sold?
                    </th>
                    <th className="py-3 pr-4 text-left font-semibold text-neutral-200">
                      Shared?
                    </th>
                    <th className="py-3 text-left font-semibold text-neutral-200">
                      Third Parties / Service Providers
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400">
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 pr-4 align-top font-medium text-neutral-300">
                      Account Information (name, email/phone)
                    </td>
                    <td className="py-4 pr-4 align-top">
                      Account creation/management; communications; service
                      delivery; security
                    </td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 align-top">
                      Cloud hosting providers; communication service providers
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 pr-4 align-top font-medium text-neutral-300">
                      Player Tracking Data (likeness, gait, body dimensions,
                      location)
                    </td>
                    <td className="py-4 pr-4 align-top">
                      On-robot player identification during round only;
                      automatically deleted after round
                    </td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 align-top">
                      None (stored on-robot only; never uploaded)
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 pr-4 align-top font-medium text-neutral-300">
                      Live Play Data (stroke counts, shot data, swing speed)
                    </td>
                    <td className="py-4 pr-4 align-top">
                      Service delivery; performance analytics; system
                      training/improvement; debugging; security
                    </td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 align-top">
                      Cloud hosting providers; network/connectivity providers
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 pr-4 align-top font-medium text-neutral-300">
                      Video and Photo Content
                    </td>
                    <td className="py-4 pr-4 align-top">
                      Service delivery; content viewing/sharing; system
                      training/improvement; debugging
                    </td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 align-top">
                      Cloud hosting providers; network/connectivity providers
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 align-top font-medium text-neutral-300">
                      Website and Mobile App Usage Data (device info, IP, pages
                      viewed)
                    </td>
                    <td className="py-4 pr-4 align-top">
                      Usage trend analysis; improving user experience; debugging;
                      security; legal compliance
                    </td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 pr-4 align-top">No</td>
                    <td className="py-4 align-top">
                      Analytics providers; cloud hosting providers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 1. Information We Collect */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              1. Information We Collect
            </h2>
            <p className="mt-6">
              We collect the following categories of personal information in
              connection with our Services:
            </p>

            <div className="mt-8">
              <h3 className="text-base font-semibold text-neutral-200">
                1.1 Account Information
              </h3>
              <p className="mt-4">
                When you create a Valeron account, we collect:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neutral-600">
                <li>Your first and last name</li>
                <li>Your email address or mobile phone number</li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-neutral-200">
                1.2 Player Tracking Data (On-Robot Only)
              </h3>
              <p className="mt-4">
                During a round of golf, the ACE robot collects certain data
                solely to track and identify you on the course and to accurately
                capture your live play content. This data includes visual and
                physical characteristics such as your likeness, gait,
                approximate body dimensions (e.g., arm length, leg length),
                clothing appearance, and location on the course.
              </p>
              <p className="mt-4 rounded border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-neutral-300">
                <span className="font-semibold">Important:</span> Player
                Tracking Data is stored only in the ACE robot&apos;s onboard
                memory during your round. It is de-identified (not associated
                with your account), is used solely to distinguish you from other
                players on the course and is automatically deleted from the robot
                at the conclusion of your round. This data is never associated
                with your Valeron account.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-neutral-200">
                1.3 Live Play Data
              </h3>
              <p className="mt-4">
                The ACE robot captures performance metrics during your round,
                including but not limited to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neutral-600">
                <li>Stroke counts</li>
                <li>Shot data and ball trajectory</li>
                <li>Swing speed</li>
                <li>
                  Other popular golf performance metrics including but not
                  limited to ball dispersion, smash factor, yardage per club,
                  carry distance, total distance, ball speed, launch angle, spin
                  rate, proximity to the pin, fairways hit, greens in
                  regulation, and other commonly used golf performance analytics
                </li>
              </ul>
              <p className="mt-4">
                Live Play Data is associated with your Valeron account and
                uploaded to the Valeron Data Service so you can view and interact
                with your performance data through our mobile application.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-neutral-200">
                1.4 Video and Photo Content
              </h3>
              <p className="mt-4">
                The ACE robot captures video and photographs of your golf swings
                and live play during your round. This Video and Photo Content is
                associated with your Valeron account and uploaded to the Valeron
                Data Service so you can view, download, and share your content
                through our mobile application.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-neutral-200">
                1.5 Website and Mobile Application Usage Data
              </h3>
              <p className="mt-4">
                When you visit our website at valeron.ai or use our mobile
                application, we may automatically collect:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neutral-600">
                <li>
                  Device information (device type, operating system, unique
                  device identifiers)
                </li>
                <li>
                  Log data (IP address, browser type, pages viewed, access
                  times)
                </li>
                <li>
                  Analytics data collected through cookies and similar
                  technologies (see Section 8, Cookies and Similar Technologies)
                </li>
              </ul>
            </div>
          </section>

          {/* 2. How Your Information Is Collected */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              2. How Your Information Is Collected
            </h2>
            <p className="mt-6">
              We collect your personal information from the following sources:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-200">
                  Directly from you
                </span>{" "}
                &mdash; when you create an account through our mobile
                application, contact us, or otherwise provide information to us
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  From the ACE robot
                </span>{" "}
                &mdash; which automatically captures Player Tracking Data, Live
                Play Data, and Video and Photo Content during your round
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  From your use of our Services
                </span>{" "}
                &mdash; including your interactions with our mobile application
                and website, collected through automated means such as cookies
                and analytics tools
              </li>
            </ul>
          </section>

          {/* 3. Why We Collect and Use Your Information */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              3. Why We Collect and Use Your Information
            </h2>
            <p className="mt-6">
              We collect and use personal information for the following business
              purposes:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neutral-600">
              <li>
                Providing, operating, and maintaining the Services, including
                delivering Live Play Data and Video and Photo Content to you
                through the mobile application
              </li>
              <li>
                Enabling you to view, manage, and share your golf round content
                and performance data
              </li>
              <li>Creating and managing your Valeron account</li>
              <li>
                Training, improving, and enhancing our systems, algorithms,
                robot performance, and the Services, including the accuracy of
                player tracking, content capture, and data analysis
              </li>
              <li>
                Debugging and identifying and repairing errors that impair the
                functionality of the Services
              </li>
              <li>
                Ensuring the security and integrity of our systems and
                preventing fraud
              </li>
              <li>
                Communicating with you about your account, the Services,
                updates, and responding to your inquiries
              </li>
              <li>
                Analyzing usage trends and improving the user experience on our
                website and mobile application
              </li>
              <li>Complying with our legal and regulatory obligations</li>
            </ul>
          </section>

          {/* 4. Categories of Information Sold to or Shared with Third Parties */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              4. Categories of Information Sold to or Shared with Third Parties
            </h2>
            <p className="mt-6">
              Valeron does not sell your personal information. We do not share
              your personal information with third parties for cross-contextual
              behavioral advertising or targeted advertising purposes.
            </p>
          </section>

          {/* 5. Categories of Information Disclosed for a Business Purpose */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              5. Categories of Information Disclosed for a Business Purpose
            </h2>
            <p className="mt-6">
              We may disclose the following categories of personal information to
              the following categories of service providers strictly for business
              purposes necessary to operate the Services:
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="py-3 pr-4 text-left font-semibold text-neutral-200">
                      Categories of Service Providers
                    </th>
                    <th className="py-3 text-left font-semibold text-neutral-200">
                      Categories of Personal Information Disclosed
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400">
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 pr-4 align-top">
                      Cloud infrastructure and hosting providers
                    </td>
                    <td className="py-4 align-top">
                      Account information (name, email/phone); Live Play Data;
                      Video and Photo Content; usage data
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 pr-4 align-top">
                      Analytics providers (website only)
                    </td>
                    <td className="py-4 align-top">
                      Website usage data (IP address, browser type, pages
                      viewed)
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 pr-4 align-top">
                      Communication service providers (e.g., email, SMS)
                    </td>
                    <td className="py-4 align-top">
                      Account information (name, email/phone)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 align-top">
                      Network and connectivity providers (cellular, WiFi)
                    </td>
                    <td className="py-4 align-top">
                      Encrypted data transmissions between the ACE robot and our
                      cloud services
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              All service providers are contractually obligated to use your
              personal information only as necessary to provide their services to
              Valeron and are prohibited from using it for their own purposes.
              These disclosures are made solely for business purposes necessary
              to operate and deliver the Services to you. Our service provider
              contracts also include the right for Valeron to take reasonable and
              appropriate steps to help ensure that each service provider uses
              personal information in a manner consistent with this Privacy
              Policy and to stop and remediate any unauthorized use.
            </p>
          </section>

          {/* 6. Use or Disclosure of Sensitive Personal Information */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              6. Use or Disclosure of Sensitive Personal Information
            </h2>
            <p className="mt-6">
              Under the CCPA/CPRA, certain categories of personal information
              are considered &ldquo;sensitive personal information.&rdquo;
              Valeron&apos;s collection of data may include information that
              could be characterized as sensitive, such as precise geolocation
              (player location on the course) and biometric-adjacent data
              (likeness, gait, body dimensions) captured by the ACE robot.
            </p>
            <p className="mt-4">
              Player Tracking Data&mdash;which includes likeness, gait, and body
              dimension information&mdash;is de-identified and stored only in
              the ACE robot&apos;s onboard memory during your round. It is never
              associated with your account and is automatically deleted at the
              conclusion of your round.
            </p>
            <p className="mt-4">
              To the extent we collect or process any sensitive personal
              information, we use it only for the following purposes:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neutral-600">
              <li>
                To perform the Services reasonably expected by Players
              </li>
              <li>
                To ensure the security and integrity of the Services
              </li>
              <li>
                To verify or maintain the quality or safety of the ACE robot and
                related Services, and to improve, upgrade, or enhance the
                Services
              </li>
            </ul>
            <p className="mt-6">
              You have the right to limit the use and disclosure of your
              sensitive personal information. If you exercise this right, we will
              limit our use and disclosure to the purposes listed above. To
              exercise this right, you may submit a request by emailing{" "}
              <a href="mailto:privacy@valeron.ai" className={linkClass}>
                privacy@valeron.ai
              </a>{" "}
              or writing to us at the address provided in Section 16, or through
              any &ldquo;Limit the Use of My Sensitive Personal
              Information&rdquo; link we make available in the mobile application
              or on our website.
            </p>
          </section>

          {/* 7. Data Security and Storage */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              7. Data Security and Storage
            </h2>
            <p className="mt-6">
              We take the security of your data seriously. We use encryption for
              data in transit and at rest where technically appropriate and
              feasible, using industry-standard encryption protocols. This
              applies to data stored on the ACE robot, data transmitted between
              the robot and our cloud services, and data held in our cloud
              infrastructure.
            </p>
            <ul className="mt-6 list-disc space-y-4 pl-6 marker:text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-200">
                  On-Robot Storage:
                </span>{" "}
                Player Tracking Data is encrypted on the ACE robot&apos;s
                onboard memory and is automatically deleted at the conclusion of
                your round.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Data in Transit:
                </span>{" "}
                Live Play Data and Video and Photo Content are transmitted from
                the ACE robot to the Valeron Data Service via encrypted cellular
                and WiFi connections.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Cloud Storage:
                </span>{" "}
                Your account information, Live Play Data, and Video and Photo
                Content are stored on encrypted public cloud infrastructure.
              </li>
            </ul>
          </section>

          {/* 8. Cookies and Similar Technologies */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              8. Cookies and Similar Technologies
            </h2>
            <p className="mt-6">
              Our website at valeron.ai uses cookies and similar technologies. We
              use:
            </p>
            <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-200">
                  Essential Cookies:
                </span>{" "}
                Necessary for the website to function properly.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Analytics Cookies:
                </span>{" "}
                Help us understand how visitors interact with our website so we
                can improve the user experience. These cookies collect
                information such as pages visited, time spent on pages, and
                referring URLs.
              </li>
            </ul>
            <p className="mt-6">
              We do not use advertising or retargeting cookies. Our mobile
              application does not use cookies but may collect usage analytics as
              described in Section 1.5.
            </p>
          </section>

          {/* 9. Data Retention */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              9. Data Retention
            </h2>
            <p className="mt-6">
              We retain your personal information in accordance with the
              following practices:
            </p>
            <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-200">
                  Player Tracking Data:
                </span>{" "}
                Automatically deleted from the ACE robot&apos;s onboard memory
                immediately at the conclusion of your round.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Account Information, Live Play Data, and Video and Photo
                  Content:
                </span>{" "}
                Retained for as long as your account is active. This data is
                subject to earlier deletion upon a verified deletion request
                submitted under Section 11, except where retention is required
                by law or falls within a permitted exception described in that
                section.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Inactive Accounts:
                </span>{" "}
                If your account is inactive for 12 consecutive months, we will
                provide you with notice before deactivating and deleting your
                account and associated data.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Deletion Requests:
                </span>{" "}
                Upon a verified deletion request, we will delete your personal
                information in accordance with Section 11.
              </li>
            </ul>
            <p className="mt-6">
              We may retain certain information as required by law or for
              legitimate business purposes, such as resolving disputes or
              enforcing our agreements.
            </p>
          </section>

          {/* 10. Use of Data to Train and Improve Our Systems */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              10. Use of Data to Train and Improve Our Systems
            </h2>
            <p className="mt-6">
              Valeron uses Player Tracking Data, Live Play Data, and Video and
              Photo Content to train and improve our systems, algorithms, and
              Services. This includes improving the ACE robot&apos;s ability to
              track players, capture content, analyze golf performance, and
              deliver a better overall experience.
            </p>
            <p className="mt-4">
              When data is used for training and improvement purposes, we take
              steps to de-identify it where feasible. Aggregated or de-identified
              data that can no longer reasonably identify you may be used without
              restriction.
            </p>
          </section>

          {/* 11. Your Rights Under California Law */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              11. Your Rights Under California Law
            </h2>
            <p className="mt-6">
              As a California consumer, you have the following rights under the
              California Consumer Privacy Act of 2018 (CCPA), as amended by the
              California Privacy Rights Act of 2020 (CPRA):
            </p>
            <ul className="mt-6 space-y-6 pl-6 list-disc marker:text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-200">
                  Right to Know
                </span>{" "}
                &ndash; You have the right to request that we disclose the
                categories and specific pieces of personal information we have
                collected about you, the categories of sources from which the
                information was collected, the business purpose for collecting
                the information, and the categories of third parties to whom we
                have disclosed the information.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Right to Delete
                </span>{" "}
                &ndash; You have the right to request that we delete your
                personal information, subject to certain exceptions. Upon
                receipt of a verified request, we will delete your personal
                information from our records and direct our service providers to
                do the same. We may not delete your personal information if it
                is reasonably necessary to:
                <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-neutral-700">
                  <li>
                    Complete a transaction or provide a service you requested, or
                    otherwise perform a contract between you and us
                  </li>
                  <li>
                    Help ensure security and integrity to the extent reasonably
                    necessary and proportionate
                  </li>
                  <li>
                    Debug to identify and repair errors that impair existing
                    intended functionality
                  </li>
                  <li>Exercise a right provided for by law</li>
                  <li>
                    Comply with the California Electronic Communications Privacy
                    Act
                  </li>
                  <li>
                    Enable solely internal uses that are reasonably aligned with
                    your expectations based on your relationship with us
                  </li>
                  <li>Comply with an existing legal obligation</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Right to Correct
                </span>{" "}
                &ndash; You have the right to request that we correct inaccurate
                personal information that we maintain about you. Upon receipt of
                a verified request, we will use commercially reasonable efforts
                to correct the inaccurate information.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Right to Opt-Out of Sale or Sharing
                </span>{" "}
                &ndash; While Valeron does not sell or share personal information
                for cross-contextual behavioral advertising, you retain the
                right to opt-out of any future sale or sharing.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Right to Limit Use of Sensitive Personal Information
                </span>{" "}
                &ndash; You have the right to limit our use and disclosure of
                your sensitive personal information to the purposes described in
                Section 6.
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Right to Non-Discrimination
                </span>{" "}
                &ndash; We will not discriminate against you for exercising any
                of your rights. This means we will not deny you services, charge
                you different prices, provide a different level or quality of
                service, or suggest that you will receive a different price or
                level of service.
              </li>
            </ul>
          </section>

          {/* 12. How to Exercise Your Rights */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              12. How to Exercise Your Rights
            </h2>
            <p className="mt-6">
              You can submit a request to exercise your rights to access,
              correct, or delete your personal information by contacting us at:
            </p>
            <div className="mt-4 space-y-1">
              <p>
                Email:{" "}
                <a href="mailto:privacy@valeron.ai" className={linkClass}>
                  privacy@valeron.ai
                </a>
              </p>
              <p>
                Mail: Valeron, Inc., 10774 Spur Point Ct., San Diego, CA 92037
                USA
              </p>
            </div>
            <p className="mt-4">
              Please note that you may only make a data access or portability
              request twice within a 12-month period.
            </p>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-neutral-200">
                Verification of Your Identity
              </h3>
              <p className="mt-4">
                We will need to verify your identity before processing your
                request. Our verification process may include confirming your
                name, email address, or phone number associated with your
                account, asking you to log into your account and complete a
                one-time passcode validation, or using other reasonable means to
                confirm your identity. We are not obligated to fulfill a request
                if we cannot verify that the person making the request is the
                person about whom we collected information, or is someone
                authorized to act on that person&apos;s behalf. Any personal
                information we collect from you to verify your identity in
                connection with your request will be used solely for verification
                purposes.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-neutral-200">
                Authorized Agent Requests
              </h3>
              <p className="mt-4">
                If you wish to use an authorized agent to submit a request on
                your behalf, the agent must provide proof of authorization (such
                as a signed written authorization or power of attorney) along
                with your contact information so that we can verify the request.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-neutral-200">
                Opt-Out of Future Sale or Sharing
              </h3>
              <p className="mt-4">
                While Valeron does not currently sell or share personal
                information, if our practices change in the future, you may opt
                out by contacting us at{" "}
                <a href="mailto:privacy@valeron.ai" className={linkClass}>
                  privacy@valeron.ai
                </a>{" "}
                or by using an opt-out preference signal such as the Global
                Privacy Control (
                <a
                  href="https://globalprivacycontrol.org/"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  globalprivacycontrol.org
                </a>
                ).
              </p>
            </div>
          </section>

          {/* 13. Children's Privacy */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              13. Children&apos;s Privacy
            </h2>
            <p className="mt-6">
              The Services are intended for individuals who are 18 years of age
              or older. We do not knowingly collect personal information from
              anyone under the age of 18. If we learn that we have collected
              personal information from a person under 18, we will take steps to
              delete that information promptly. If you believe that a person
              under 18 has provided personal information to us, please contact us
              at{" "}
              <a href="mailto:privacy@valeron.ai" className={linkClass}>
                privacy@valeron.ai
              </a>
              .
            </p>
          </section>

          {/* 14. Sharing Content with Others */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              14. Sharing Content with Others
            </h2>
            <p className="mt-6">
              Our mobile application allows you to share your Live Play Data and
              Video and Photo Content with others (for example, by sending
              videos, photos, or performance data to friends or posting on social
              media). When you choose to share content, that content may be
              viewed, copied, or further shared by the recipients. Valeron is not
              responsible for how others use content that you have chosen to
              share.
            </p>
          </section>

          {/* 15. Changes to This Privacy Policy */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              15. Changes to This Privacy Policy
            </h2>
            <p className="mt-6">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes, we will notify you by
              updating the &ldquo;Last Updated&rdquo; date at the top of this
              Privacy Policy and, for material changes that affect the categories
              of personal information collected, the purposes for which it is
              used, or its sold or shared status, we will provide direct notice
              to you via in-app notification or email before the changes take
              effect. We encourage you to review this Privacy Policy
              periodically.
            </p>
          </section>

          {/* 16. Contact Us */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white">
              16. Contact Us
            </h2>
            <p className="mt-6">
              For questions, concerns, or requests regarding this Privacy Policy
              or our data practices, please contact us at:
            </p>
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-neutral-200">Valeron, Inc.</p>
              <p>10774 Spur Point Ct.</p>
              <p>San Diego, CA 92037 USA</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:privacy@valeron.ai" className={linkClass}>
                  privacy@valeron.ai
                </a>
              </p>
              <p>
                Web:{" "}
                <a href="https://valeron.ai/privacy" className={linkClass}>
                  valeron.ai/privacy
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-8 py-8 md:px-16 lg:px-32">
        <div className="mx-auto max-w-3xl text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Valeron, Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
