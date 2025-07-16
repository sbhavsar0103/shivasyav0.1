
import '../assets/styles/frontend.mindabc.css';
import '../assets/styles/widget-icon-list.mindabc.css';
import '../assets/styles/widget-spacer.mindabc.css';
import '../assets/styles/fontawesome.min52d5.css';
import '../assets/styles/regular.min4113.css';
import '../assets/styles/jkiticon4113.css';
import '../assets/styles/solid.min4113.css';
import '../assets/styles/main4113.css';
import '../assets/styles/frontend.min2916.css';
import '../assets/styles/widget-heading.mindabc.css';
import '../assets/styles/widget-divider.mindabc.css';
import '../assets/styles/swiper.minf2de.css';
import '../assets/styles/loftloader.min44fa.css';
import '../assets/styles/all.min4113.css';
import '../assets/styles/about_style.css';

const About = () => {

    useEffect(() => {
        const rocket_pairs = [
            {
                selector: ".elementor-53 .elementor-element.elementor-element-4ff32c6c:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap",
                style: ":root{--wpr-bg-174803aa-5cc8-4908-abef-2ec6c1617bf0: url('https://res.cloudinary.com/dzptyqozu/images/f_auto,q_auto/v1703073287/global-colliance-image/global-colliance-image.webp?_i=AA');}",
                hash: "174803aa-5cc8-4908-abef-2ec6c1617bf0"
            },
            {
                selector: ".elementor-53 .elementor-element.elementor-element-388ba073:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap",
                style: ":root{--wpr-bg-95e8ba7a-ac62-4857-9844-0ae4e358a3ee: url('https://res.cloudinary.com/dzptyqozu/images/f_auto,q_auto/v1703313358/giving-passport-back-to-woman/giving-passport-back-to-woman.jpg?_i=AA');}",
                hash: "95e8ba7a-ac62-4857-9844-0ae4e358a3ee"
            }
        ];

        const styleElement = document.getElementById("wpr-lazyload-bg");
        if (styleElement && rocket_pairs.length > 0) {
            rocket_pairs.forEach(pair => {
                styleElement.innerHTML += pair.style;
            });
        }

    }, []);

  return (
    <body class="wp-singular page-template page-template-elementor_header_footer page page-id-520 wp-embed-responsive wp-theme-oceanwp wp-child-theme-oceanwp-child-theme-master metaslider-plugin jkit-color-scheme oceanwp-theme dropdown-mobile default-breakpoint has-sidebar content-right-sidebar page-header-disabled loftloader-lite-enabled elementor-default elementor-template-full-width elementor-kit-13 elementor-page elementor-page-520"
      itemscope="itemscope" itemtype="https://schema.org/WebPage">
      <div id="outer-wrap" class="site clr">
        <div id="wrap" class="clr">
          <main id="main" class="site-main clr" role="main">
            <div data-elementor-type="wp-page" data-elementor-id="520" class="elementor elementor-520">
              <section class="elementor-section elementor-top-section elementor-element elementor-element-3ac27bcb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3ac27bcb" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div class="elementor-background-overlay"></div>
                <div class="elementor-container elementor-column-gap-default">
                  <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2d70d0c" data-id="2d70d0c" data-element_type="column"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div class="elementor-widget-wrap elementor-element-populated">
                      <div class="elementor-background-overlay"></div>
                      <div class="elementor-element elementor-element-784324e elementor-icon-list--layout-inline elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="784324e" data-element_type="widget" data-widget_type="icon-list.default">
                        <div class="elementor-widget-container">
                          <ul class="elementor-icon-list-items elementor-inline-items">
                            <li class="elementor-icon-list-item elementor-inline-item">
                              <a href="index.html">
                                <span class="elementor-icon-list-text">Home</span>
                              </a>
                            </li>
                            <li class="elementor-icon-list-item elementor-inline-item">
                              <span class="elementor-icon-list-icon">
                                <i aria-hidden="true" class="fas fa-chevron-right"></i> </span>
                              <span class="elementor-icon-list-text">About</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="elementor-element elementor-element-228930ab elementor-widget elementor-widget-heading" data-id="228930ab" data-element_type="widget" data-widget_type="heading.default">
                        <div class="elementor-widget-container">
                          <h1 class="elementor-heading-title elementor-size-default">About</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </body>
  )
};

export default About;