<template>
  <div class="page help-page">
    <b-tabs v-model="activeTab" vertical>
      <b-tab
        v-for="tab in tabs"
        :key="tab.id"
        :title="tab.title"
        :disabled="tab.disabled"
        @click="navigateToProduct(tab.slug)"
      >
        <div v-if="tab?.collapse?.length">
          <h2>
            {{ tab.title }}
          </h2>
          <div v-if="tab.desc" v-html="tab.desc" />
          <div
            v-for="item in tab.collapse"
            :key="item.id"
            class="accordion"
            role="tablist"
          >
            <b-card-header
              v-b-toggle="`accordion-${item.id}`"
              header-tag="header"
              role="tab"
              @click="toggleIcon(item.id)"
            >
              <p>
                {{ item.name }}
              </p>
              <i :class="{ rotate: activeCollapse === item.id }">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5856 5.46849C11.3269 5.79194 10.8549 5.84438 10.5315 5.58562L5.99997 1.96044L1.46849 5.58562C1.14505 5.84438 0.673077 5.79194 0.41432 5.46849C0.155562 5.14505 0.208004 4.67308 0.53145 4.41432L5.53145 0.414321C5.80536 0.195189 6.19458 0.195189 6.46849 0.414321L11.4685 4.41432C11.7919 4.67308 11.8444 5.14505 11.5856 5.46849Z"
                    fill="#333333"
                  />
                </svg>
              </i>
            </b-card-header>
            <b-collapse
              :id="`accordion-${item.id}`"
              accordion="my-accordion"
              visible
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text v-for="(i, index) in item.desc" :key="index">
                  {{ i.name }}
                </b-card-text>
                <iframe
                  v-if="item.location"
                  :src="item.location"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </b-card-body>
            </b-collapse>
          </div>
        </div>
        <div v-else class="contactUs">
          <b-form @submit="onSubmit">
            <div class="first-last">
              <div class="firstname">
                <label for="firstname">FIRST NAME</label>
                <b-form-input
                  id="firstname"
                  v-model="contacts.firstname"
                  type="text"
                  required
                />
              </div>
              <div class="lastname">
                <label for="lastname">LAST NAME</label>
                <b-form-input
                  id="lastname"
                  v-model="contacts.lastname"
                  type="text"
                  required
                />
              </div>
            </div>
            <b-form-group
              label="Email"
              label-for="email"
              description="We'll never share your email with anyone else."
            >
              <b-form-input id="email" v-model="contacts.email" type="email" required />
            </b-form-group>

            <b-form-group label="TOPIC" label-for="topic">
              <b-form-select
                id="topic"
                v-model="contacts.topic"
                :options="foods"
                required
              />
            </b-form-group>
            <b-form-group label="MUST BE NOT EMPTY" label-for="commit">
              <b-form-textarea id="commit" v-model="contacts.commit" rows="8" />
            </b-form-group>
            <b-button type="submit">
              SEND
            </b-button>
          </b-form>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  name: 'HelpPage',
  data () {
    return {
      activeTab: null,
      tabs: [
        {
          id: 1,
          title: 'HELP',
          slug: 'help',
          disabled: true
        },
        {
          id: 2,
          title: 'DELIVERY INFORMATION',
          slug: 'delivery-information',
          disabled: false,
          collapse: [
            {
              id: 1,
              name: 'PERSONAL INFORMATION WE COLLECT',
              desc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor'
            },
            {
              id: 2,
              name: 'SHARING YOUR PERSONAL INFORMATION',
              desc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor'
            },
            {
              id: 3,
              name: 'BEHAVIOURAL ADVERTISING',
              desc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor'
            },
            {
              id: 4,
              name: 'YOU CAN OPT OUT OF TARGETED ADVERTISING BY:',
              desc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor'
            },
            {
              id: 5,
              name: 'DO NOT TRACK',
              desc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor'
            },
            {
              id: 6,
              name: 'YOUR RIGHTS',
              desc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor'
            },
            {
              id: 7,
              name: 'MINORS',
              desc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor'
            }
          ]
        },
        {
          id: 3,
          title: 'RETURNS & REFUNDS',
          slug: 'returns-refunds',
          disabled: false,
          desc: `
          <b>Elbe Menswear</b>
          <b>Effective Date: 16.07.2023</b>
          <p>At Elbe Menswear, we strive to provide the best quality products and services to our customers. In the event of cancellation, a full refund is given minus a £10 booking fee. Goods cancelled within 7 days are required to pay half the hire fee. There is no refund for goods cancelled on the day of hire. Full refund on sold items as long it's not worn. Please see below for more information on our return policy: Certain limitations apply on purchases made during sale seasons.</p>
          `,
          collapse: [
            {
              id: 1,
              name: 'Normal Refund',
              desc: [
                {
                  id: 1,
                  name: 'Eligibility:'
                },
                {
                  id: 2,
                  name: '• Items must be returned within 7 days of purchase.'
                },
                {
                  id: 3,
                  name:
                    '• Items must be in their original condition, unworn, unwashed, and with all original tags and packaging intact.'
                },
                {
                  id: 4,
                  name: 'Process:'
                },
                {
                  id: 5,
                  name:
                    '• Contact our customer service team at elbemenswear@gmail.com to initiate a return.'
                },
                {
                  id: 6,
                  name: '• Provide your order number and reason for the return.'
                },
                {
                  id: 7,
                  name:
                    '• Once your return is approved, you will receive a return authorization number and instructions on how to send your item(s) back to us.'
                },
                {
                  id: 8,
                  name: 'Refund:'
                },
                {
                  id: 9,
                  name:
                    '• After we receive and inspect the returned item(s), we will process your refund.'
                },
                {
                  id: 10,
                  name:
                    '• Refunds will be issued to the original payment method used during the purchase.'
                },
                {
                  id: 11,
                  name:
                    '• Please allow 5-10 business days for the refund to reflect in your account.'
                }
              ]
            },
            {
              id: 2,
              name: 'Defect/Damage Refunds',
              desc: [
                {
                  id: 1,
                  name: 'Eligibility:'
                },
                {
                  id: 2,
                  name: '• Items must be returned within 7 days of purchase.'
                },
                {
                  id: 3,
                  name:
                    '• Items that arrive defective or damaged are eligible for a full refund or replacement.'
                },
                {
                  id: 4,
                  name: 'Process:'
                },
                {
                  id: 5,
                  name:
                    '• Contact our customer service team at elbemenswear@gmail.com immediately upon discovering the defect or damage.'
                },
                {
                  id: 6,
                  name:
                    '• Provide your order number, a description of the issue, and photos of the defect or damage.'
                },
                {
                  id: 7,
                  name:
                    '• Once your claim is approved, you will receive a return authorization number and instructions on how to send your item(s) back to us.'
                },
                {
                  id: 8,
                  name: 'Refund/Replacement::'
                },
                {
                  id: 9,
                  name:
                    '• After we receive and inspect the returned item(s), we will process your refund or send a replacement.'
                },
                {
                  id: 10,
                  name:
                    '• Refunds will be issued to the original payment method used during the purchase.'
                },
                {
                  id: 11,
                  name: '• Replacements will be shipped to you at no additional cost.'
                },
                {
                  id: 12,
                  name:
                    '• Please allow 5-10 business days for the refund to reflect in your account, or for the replacement item to be shipped.'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          title: 'LOCATION',
          slug: 'site-map',
          disabled: false,
          collapse: [
            {
              id: 1,
              name: 'ELBE MENSWEAR SUNBURY ON THAMES',
              desc: [
                {
                  id: 1,
                  name: 'Sunbury-on-Thames 4 Avenue Parade, Sunbury on Thames, TW16 5HS'
                },
                {
                  id: 2,
                  name: 'Phone number: 01932781900'
                },
                {
                  id: 3,
                  name: 'E-mail: Elbesunbury@gmail.com'
                },
                {
                  id: 3,
                  name: 'Open Monday - Saturday 8:30 - 17:30'
                }
              ],
              location:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.7929712150226!2d-0.40603279999999997!3d51.4068586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876759e0ec3bf65%3A0xbb4f05e364d85b6b!2sELBE%20Sunbury!5e0!3m2!1sru!2s!4v1722530861024!5m2!1sru!2s'
            },
            {
              id: 2,
              name: 'ELBE MENSWEAR Weybridge',
              desc: [
                {
                  id: 1,
                  name: 'Weybridge 1 Church Street, Weybridge, KT13 8BY'
                },
                {
                  id: 2,
                  name: 'Phone number: 01932848121'
                },
                {
                  id: 3,
                  name: 'E-mail: Elbeweybridge@gmail.com'
                },
                {
                  id: 4,
                  name: 'Open Monday - Saturday 9:00 - 17:30'
                }
              ],
              location:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.6633608594234!2d-0.4584882999999999!3d51.3724851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487675db5f2cbe11%3A0xe87d7c2557bcd146!2zMSBDaHVyY2ggU3QsIFdleWJyaWRnZSBLVDEzIDhCWSwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2s!4v1722530913409!5m2!1sru!2s'
            }
          ]
        },
        {
          id: 5,
          title: 'CONTACT US',
          slug: 'contact-us',
          disabled: false
        },
        {
          id: 6,
          title: 'FAQ’S',
          slug: 'faqs',
          disabled: false,
          collapse: [
            {
              id: 1,
              name: '1. How long does it take to make a bespoke suit?',
              desc: [
                {
                  id: 1,
                  name:
                    'Bespoke suits take approximately 4-6 weeks depending on the materials and components used.'
                }
              ]
            },
            {
              id: 2,
              name: '2. How long does it take to make a made-to-measure (MTM) suit?',
              desc: [
                {
                  id: 1,
                  name:
                    'Made-to-measure suits take 2-4 weeks, depending on the availability of fabrics.'
                }
              ]
            },
            {
              id: 3,
              name: '3. How much does a bespoke suit cost?',
              desc: [
                {
                  id: 1,
                  name:
                    'The cost of a bespoke suit varies based on factors such as fabrics, linings, and buttons. Prices range from £1000 to £2500.'
                }
              ]
            },
            {
              id: 4,
              name: '4. How much does a made-to-measure (MTM) suit cost?',
              desc: [
                {
                  id: 1,
                  name: 'The cost of an MTM suit depends on the fabric:'
                },
                {
                  id: 2,
                  name: '• Up to 40% Wool: from £445'
                },
                {
                  id: 3,
                  name: '• Up to 50% Wool: from £499'
                },
                {
                  id: 4,
                  name: '• Up to 100% Wool: around £700'
                }
              ]
            },
            {
              id: 5,
              name: '5. How much does it cost to hire a tuxedo?',
              desc: [
                {
                  id: 1,
                  name: '• Off the peg classic fit: £59.95'
                },
                {
                  id: 2,
                  name: '• Slim fit suit: from £74.95'
                },
                {
                  id: 3,
                  name: '• Tailor-made option to hire: £145.99'
                }
              ]
            },
            {
              id: 6,
              name: '6. How much does it cost to hire a morning suit?',
              desc: [
                {
                  id: 1,
                  name: '• Off the peg classic fit: £99.95'
                },
                {
                  id: 2,
                  name: '• Slim fit suit: from £134.95'
                },
                {
                  id: 3,
                  name: '• Tailor-made option to hire: £169.95'
                }
              ]
            },
            {
              id: 7,
              name: '7. Can I hire shoes?',
              desc: [
                {
                  id: 1,
                  name:
                    '• No, we no longer offer shoe hire, but we have budget range shoes available from £39.00.'
                }
              ]
            },
            {
              id: 8,
              name: '8. Can I hire a shirt?',
              desc: [
                {
                  id: 1,
                  name: '• Yes, shirt hire is available from £12.95.'
                }
              ]
            },
            {
              id: 9,
              name: '9. Can I hire a suit on the same day?',
              desc: [
                {
                  id: 1,
                  name:
                    '• Yes, same-day hire is possible depending on the availability of the particular suit. We maintain a large stock at our stores.'
                }
              ]
            },
            {
              id: 10,
              name: '10. Do I have to clean the suit before returning it?',
              desc: [
                {
                  id: 1,
                  name: '• No, professional cleaning is handled by us.'
                }
              ]
            },
            {
              id: 11,
              name: '11. Do you offer VIP services?',
              desc: [
                {
                  id: 1,
                  name:
                    '• Yes, we offer VIP services and can open the store outside of regular hours.'
                }
              ]
            }
          ]
        },
        {
          id: 7,
          title: 'TERM’S & CONDITIONS',
          slug: 'term-conditions',
          desc: `
          <b>Elbe Menswear</b>
          <b>Effective Date: 16.07.2023</b>
          <p>Welcome to Elbe Menswear. These Terms and Conditions govern your use of our website and the purchase of products from our online store. By accessing or using our website, you agree to be bound by these Terms and Conditions.</p>
          `,
          disabled: false,
          collapse: [
            {
              id: 1,
              name: '1. General',
              desc: [
                {
                  id: 1,
                  name:
                    '1.1. These Terms and Conditions apply to all users of the Elbe Menswear website.'
                },
                {
                  id: 2,
                  name:
                    '1.2. By using our website, you agree to comply with and be legally bound by these Terms and Conditions.'
                },
                {
                  id: 3,
                  name:
                    '1.3. We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the new Terms and Conditions.'
                }
              ]
            },
            {
              id: 2,
              name: '2. Use of the Website',
              desc: [
                {
                  id: 1,
                  name:
                    '2.1. You must be at least 18 years old or have reached the age of majority in your jurisdiction to use our website and make purchases.'
                },
                {
                  id: 2,
                  name:
                    '2.2. You agree to use our website for lawful purposes only and in accordance with these Terms and Conditions.'
                },
                {
                  id: 3,
                  name:
                    '2.3. You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.'
                }
              ]
            },
            {
              id: 3,
              name: '3. Product Information and Orders',
              desc: [
                {
                  id: 1,
                  name:
                    '3.1. We strive to ensure that the information on our website is accurate and up-to-date. However, we do not guarantee the accuracy, completeness, or reliability of any information on the website.'
                },
                {
                  id: 2,
                  name:
                    '3.2. All orders are subject to availability and acceptance. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product information or pricing, and suspected fraud.'
                },
                {
                  id: 3,
                  name:
                    '3.3. Prices for our products are subject to change without notice. We reserve the right to modify or discontinue products at any time.'
                }
              ]
            },
            {
              id: 4,
              name: '4. Payment and Shipping',
              desc: [
                {
                  id: 1,
                  name:
                    '4.1. All prices are in Pound (GBP) and include applicable taxes unless otherwise stated.'
                },
                {
                  id: 2,
                  name:
                    '4.2. Payment must be made at the time of purchase. We accept all payment options.'
                },
                {
                  id: 3,
                  name:
                    '4.3. We aim to process and ship orders promptly. Shipping times may vary depending on your location and shipping method selected.'
                },
                {
                  id: 4,
                  name:
                    '4.4. You are responsible for providing accurate shipping information. We are not responsible for any delays or losses resulting from incorrect or incomplete shipping information.'
                }
              ]
            },
            {
              id: 5,
              name: '5. Returns and Refunds',
              desc: [
                {
                  id: 1,
                  name:
                    '5.1. We accept returns and exchanges in accordance with our Return Policy, which is available on our website.'
                },
                {
                  id: 2,
                  name:
                    '5.2. To be eligible for a return or exchange, products must be unused, in their original condition, and with all original packaging and tags.'
                },
                {
                  id: 3,
                  name:
                    '5.3. Refunds will be processed using the original payment method. Shipping costs are non-refundable.'
                }
              ]
            },
            {
              id: 6,
              name: '6. Intellectual Property',
              desc: [
                {
                  id: 1,
                  name:
                    '6.1. All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Elbe Menswear or its content suppliers and is protected by intellectual property laws.'
                },
                {
                  id: 2,
                  name:
                    '6.2. You may not reproduce, distribute, modify, or create derivative works of any content on our website without our prior written consent.'
                }
              ]
            },
            {
              id: 7,
              name: '7. Limitation of Liability',
              desc: [
                {
                  id: 1,
                  name:
                    '7.1. To the fullest extent permitted by law, Elbe Menswear shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website or the purchase of products from our online store.'
                },
                {
                  id: 2,
                  name:
                    '7.2. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.'
                }
              ]
            },
            {
              id: 8,
              name: '8. Governing Law',
              desc: [
                {
                  id: 1,
                  name:
                    '8.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of England, without regard to its conflict of law principles.'
                },
                {
                  id: 2,
                  name:
                    '8.2. Any disputes arising out of or related to these Terms and Conditions or your use of our website shall be resolved exclusively in the courts of England.'
                }
              ]
            },
            {
              id: 9,
              name: '9. Contact Us',
              desc: [
                {
                  id: 1,
                  name:
                    'If you have any questions about these Terms and Conditions, please contact us at:'
                },
                {
                  id: 2,
                  name: 'Elbe Menswear'
                },
                {
                  id: 3,
                  name: 'Email: elbemenswear@gmail.com'
                },
                {
                  id: 4,
                  name: 'Phone: 01932781900'
                },
                {
                  id: 5,
                  name: 'Address: 4 Avenue Parade,'
                },
                {
                  id: 6,
                  name: 'United Kingdom,'
                },
                {
                  id: 7,
                  name: 'Sunbury-on-Thames, TW16 5HS.'
                }
              ]
            }
          ]
        },
        {
          id: 8,
          title: 'PRIVACY POLICY',
          slug: 'privacy-policy',
          desc: `
          <b>Elbe Menswear</b>
          <b>Effective Date: 16.07.2023</b>
          <p>At Elbe Menswear, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or make a purchase.</p>
          `,
          disabled: false,
          collapse: [
            {
              id: 1,
              name: '1. Information We Collect',
              desc: [
                {
                  id: 1,
                  name: 'We collect the following types of information'
                },
                {
                  id: 2,
                  name:
                    '• Personal Information: When you make a purchase or create an account, we collect personal information such as your name, email address, shipping address, phone number, and payment information.'
                },
                {
                  id: 3,
                  name:
                    '• Browsing Information: We collect information about your interactions with our website, including your IP address, browser type, referring/exit pages, and operating system.'
                }
              ]
            },
            {
              id: 2,
              name: '2. How We Use Your Information',
              desc: [
                {
                  id: 1,
                  name: 'We use your information for the following purposes:'
                },
                {
                  id: 2,
                  name:
                    '• Order Processing: To process and fulfill your orders, including shipping and payment processing.'
                },
                {
                  id: 3,
                  name:
                    '• Customer Service: To provide customer support and respond to your inquiries.'
                },
                {
                  id: 4,
                  name:
                    '• Marketing: To send you promotional materials, newsletters, and other communications (you can opt-out at any time).'
                },
                {
                  id: 5,
                  name:
                    '• Website Improvement: To analyze and improve our website’s functionality and user experience.'
                }
              ]
            },
            {
              id: 3,
              name: '3. Sharing Your Information',
              desc: [
                {
                  id: 1,
                  name:
                    'We do not sell or rent your personal information to third parties. We may share your information with:'
                },
                {
                  id: 2,
                  name:
                    '• Service Providers: Third-party service providers who perform services on our behalf, such as payment processing, shipping, and marketing.'
                },
                {
                  id: 3,
                  name:
                    '• Legal Requirements: If required by law or to protect our rights, we may disclose your information to government authorities or other third parties.'
                }
              ]
            },
            {
              id: 4,
              name: '4. Cookies and Tracking Technologies',
              desc: [
                {
                  id: 1,
                  name:
                    'We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser.'
                }
              ]
            },
            {
              id: 5,
              name: '5. Security',
              desc: [
                {
                  id: 1,
                  name:
                    'We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.'
                }
              ]
            },
            {
              id: 6,
              name: '6. Your Rights',
              desc: [
                {
                  id: 1,
                  name: 'You have the right to:'
                },
                {
                  id: 2,
                  name: '• Access and update your personal information.'
                },
                {
                  id: 3,
                  name: '• Opt-out of receiving marketing communications.'
                },
                {
                  id: 4,
                  name:
                    '• Request the deletion of your personal information (subject to legal obligations).'
                }
              ]
            },
            {
              id: 7,
              name: '7. Changes to This Privacy Policy',
              desc: [
                {
                  id: 1,
                  name:
                    'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.'
                }
              ]
            },
            {
              id: 8,
              name: '8. Contact Us',
              desc: [
                {
                  id: 1,
                  name:
                    'If you have any questions about this Privacy Policy or our privacy practices, please contact us at:'
                },
                {
                  id: 2,
                  name: 'Elbe Menswear'
                },
                {
                  id: 3,
                  name: 'Email: elbemenswear@gmail.com'
                },
                {
                  id: 4,
                  name: 'Phone: 01932781900'
                },
                {
                  id: 5,
                  name: 'Address: 4 Avenue Parade,'
                },
                {
                  id: 6,
                  name: 'United Kingdom,'
                },
                {
                  id: 7,
                  name: 'Sunbury-on-Thames, TW16 5HS.'
                }
              ]
            }
          ]
        }
      ],
      activeCollapse: 1,
      contacts: {
        firstname: null,
        lastname: null,
        email: null,
        topic: null,
        commit: null
      },
      foods: ['Carrots', 'Beans', 'Tomatoes', 'Corn']
    }
  },
  watch: {
    '$route.query.slug' () {
      this.tabContactHandle()
      this.activeTab = this.tabs.findIndex(e => e.slug === this.$route.query.slug)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.tabContactHandle()
      if (this.$route.query?.slug) {
        this.activeTab = this.tabs.findIndex(e => e.slug === this.$route.query.slug)
      } else {
        this.$router.push({ path: '/help', query: { slug: this.activeTab[0]?.slug } })
      }
    })
  },
  methods: {
    navigateToProduct (slug) {
      this.$router.push({ path: '/help', query: { slug } })
    },
    toggleIcon (id) {
      this.activeCollapse = this.activeCollapse === id ? null : id
    },
    tabContactHandle () {
      const tabContent = document.querySelector('.tab-content.col')
      if (this.$route.query.slug === 'contact-us') {
        tabContent.classList.add('contact')
      } else {
        tabContent.classList.remove('contact')
      }
    },
    onSubmit () {
      console.log(this.contacts)
    }
  }
}
</script>
