import PageHeader from "@/components/ui/PageHeader";
import Main from "@/components/structure/Main";
import ContainerLongText from "@/components/structure/ContainerLongText";
import { Section, SubSection, Article } from "@/components/structure/core";

export default function page() {
	return (
		<>
			<PageHeader
				title={"BritLogic Technologies Privacy Policy"}
				subtitle="Your privacy is important to us, and we are committed to protecting your personal information and ensuring transparency in how we handle it."
				referrer="/"
			/>
			<Main className="mb-12 min-h-dvh">
				<ContainerLongText>
					<Section>
						<Article>
							<h2>Privacy Policy</h2>
							<p>
								At BritLogic, we are committed to protecting your privacy. This Privacy Policy
								explains how we collect, use, disclose, and safeguard your information when you
								visit our website and use our services. Please read this policy carefully. If you do
								not agree with the terms of this Privacy Policy, please do not access the site.
							</p>
						</Article>

						<Article>
							<h2>1. Information We Collect</h2>
							<SubSection>
								<h3>Personal Data</h3>
								<p>
									We may collect personally identifiable information, such as your name, email
									address, phone number, and company details, when you voluntarily provide it to us
									through forms, subscriptions, or direct communication.
								</p>
							</SubSection>
							<SubSection>
								<h3>Non-Personal Data</h3>
								<p>
									We automatically collect certain information when you visit our website, such as
									your IP address, browser type, operating system, access times, and pages viewed.
									This information is used to improve our services and enhance user experience.
								</p>
							</SubSection>
						</Article>

						<Article>
							<h2>2. How We Use Your Information</h2>
							<ul>
								<li>To provide, operate, and maintain our website and services</li>
								<li>To improve user experience and personalize your interactions with our site</li>
								<li>
									To communicate with you, including responding to inquiries and providing updates
								</li>
								<li>
									To send marketing emails, newsletters, and promotional materials (with your
									consent)
								</li>
								<li>To comply with legal obligations and protect our legal rights</li>
							</ul>
							<h2>3. Sharing Your Information</h2>
							<p>
								We do not sell, rent, or trade your personal information to third parties. We may
								share your information with trusted third parties who assist us in operating our
								website and providing services, under strict confidentiality agreements. We may also
								disclose your information if required by law or to protect our legal rights.
							</p>
						</Article>

						<Article>
							<h2>4. Cookies and Tracking Technologies</h2>
							<p>
								We use cookies and similar tracking technologies to enhance your browsing
								experience, analyze website traffic, and personalize content. You can manage your
								cookie preferences through your browser settings.
							</p>
						</Article>

						<Article>
							<h2>5. Data Security</h2>
							<p>
								We implement appropriate technical and organizational security measures to protect
								your personal data from unauthorized access, use, or disclosure. However, no method
								of transmission over the internet is 100% secure, and we cannot guarantee absolute
								security.
							</p>
						</Article>

						<Article>
							<h2>6. Your Data Protection Rights</h2>
							<p>You have the right to:</p>
							<ul>
								<li>Access, update, or delete your personal information</li>
								<li>Withdraw your consent for data processing at any time</li>
								<li>Object to our use of your personal data for direct marketing</li>
								<li>Request a copy of the information we hold about you</li>
							</ul>
							<p>
								To exercise these rights, please contact us at{" "}
								<a href="mailto:privacy@britlogic.com">privacy@britlogic.com</a>.
							</p>
						</Article>

						<Article>
							<h2>7. Third-Party Links</h2>
							<p>
								Our website may contain links to third-party websites that are not operated by us.
								We are not responsible for the privacy practices of these third-party sites. We
								encourage you to review their privacy policies before providing any personal data.
							</p>
							<h2>8. Changes to This Privacy Policy</h2>
							<p>
								We may update this Privacy Policy from time to time to reflect changes in our
								practices or legal obligations. Any changes will be posted on this page, and the
								updated date will be indicated at the top of the policy.
							</p>
						</Article>

						<Article>
							<h2>9. Contact Us</h2>
							<p>
								If you have any questions or concerns about this Privacy Policy, please contact us
								at:
							</p>
							<p>
								<strong>BritLogic</strong>
								<br />
								Email: <a href="mailto:privacy@britlogic.com">privacy@britlogic.com</a>
								<br />
								Phone: +91 8828758787
							</p>
						</Article>
					</Section>
				</ContainerLongText>
			</Main>
		</>
	);
}
