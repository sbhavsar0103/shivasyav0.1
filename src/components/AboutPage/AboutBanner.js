import React, { useEffect } from "react";
import '../../assets/styles/frontend.mindabc.css';
import '../../assets/styles/widget-icon-list.mindabc.css';
import '../../assets/styles/widget-spacer.mindabc.css';
import '../../assets/styles/fontawesome.min52d5.css';
import '../../assets/styles/regular.min4113.css';
import '../../assets/styles/jkiticon4113.css';
import '../../assets/styles/solid.min4113.css';

const AbousComponet = () => {

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
        <>
            <style id="wpr-lazyload-bg" />
            <style id="wpr-lazyload-bg-exclusion" />
            <div className="elementor-kit-13">
                <div id="" class="">
                    <main>
                        <div class="elementor elementor-53">
                            <section class="elementor-section elementor-element elementor-element-5804d0a5 elementor-reverse-mobile">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-25">
                                        <div class="elementor-element-populated">
                                            <section class="elementor-element elementor-element-1d9253d7">
                                                <div class="elementor-element elementor-element-470bfce0">
                                                    <div class="">
                                                        <div class="jeg-elementor-kit jkit-icon-box">
                                                            <div class="jkit-icon-box-wrapper">
                                                                <div class="icon-box-body">
                                                                    <h3 class="title">Our Vision</h3>
                                                                    <p class="icon-box-description">
                                                                        At Global
                                                                        Colliance, our vision is to create a world
                                                                        where every student has the opportunity to
                                                                        broaden their horizons and gain global
                                                                        exposure through foreign education.
                                                                    </p>
                                                                    <div class="icon-box-button hover">
                                                                        <div class="">
                                                                            <a href="about/index.html" class="icon-box-link" aria-label="Read More">
                                                                                Read More
                                                                                <i aria-hidden="true" class="fas fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section class="elementor-element elementor-element-57331d2f">
                                                <div class="elementor-element elementor-element-4ff32c6c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                    <div class="elementor-widget-wrap">
                                                        <div class="elementor-element elementor-element-72d41029">
                                                            <div class="">
                                                                <div class="">
                                                                    <div class="elementor-spacer-inner"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-25">
                                        <div class="elementor-element-populated">
                                            <section class="elementor-element elementor-element-1d9253d7"
                                                data-id="1d9253d7" data-element_type="section">
                                                <div class="elementor-column-gap-default">
                                                    <div class="elementor-column elementor-element elementor-element-388ba073"
                                                        data-id="388ba073" data-element_type="column"
                                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                            <div class="elementor-element elementor-element-4b040299 elementor-widget-tablet__width-initial elementor-widget elementor-widget-spacer"
                                                                data-id="4b040299" data-element_type="widget"
                                                                data-widget_type="spacer.default">
                                                                <div class="elementor-widget-container">
                                                                    <div class="elementor-spacer">
                                                                        <div class="elementor-spacer-inner"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section class="">
                                                <div class="">
                                                    <div class="">
                                                        <div class="">
                                                            <div class="elementor-element elementor-element-2168fb35">
                                                                <div class="">
                                                                    <div class="jeg-elementor-kit jkit-icon-box">
                                                                        <div class="jkit-icon-box-wrapper">
                                                                            <div class="icon-box-body">
                                                                                <h3 class="title">Our Mission</h3>
                                                                                <p class="icon-box-description">
                                                                                    Our mission at
                                                                                    Global Colliance is to provide students with
                                                                                    exceptional study-abroad experiences that
                                                                                    inspire personal growth, academic
                                                                                    achievement, and cross-cultural
                                                                                    understanding.
                                                                                </p>
                                                                                <div class="icon-box-button hover">
                                                                                    <div class="">
                                                                                        <a href="about/index.html" class="icon-box-link" aria-label="Read More">
                                                                                            Read More
                                                                                            <i aria-hidden="true" class="fas fa-arrow-right"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-50 elementor-element elementor-element-48e107">
                                        <div class="elementor-element-populated">
                                            <div class="elementor-element elementor-element-7b90bfdf">
                                                <div class="elementor-widget-container">
                                                    <ul class="elementor-icon-list-items">
                                                        <li class="elementor-icon-list-item">
                                                            <span class="elementor-icon-list-icon">
                                                                <i aria-hidden="true" class="far fa-dot-circle"></i> </span>
                                                            <span class="elementor-icon-list-text">About Company</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-197b8114 elementor-widget elementor-widget-heading">
                                                <div class="">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                        Our Story <b>Who We Are </b>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-6555523f elementor-widget">
                                                <div class="">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                        Global Colliance is a leading study abroad consultant in India, offering expert guidance
                                                        and comprehensive services for those seeking international education opportunities.
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-701ab64e">
                                                <div class="">
                                                    <p>
                                                        With over a decade of experience, Global Colliance has established itself as a trusted name in overseas education consultants in India, committed to delivering convenience and excellence to aspiring students. Fulfil
                                                        your ambition of studying abroad with guidance from our dedicated study-abroad education consultants.
                                                    </p>
                                                </div>
                                            </div>
                                            <section class="elementor-element elementor-element-58768c28 elementor-section-boxed">
                                                <div class="elementor-container">
                                                    <div class="elementor-column elementor-col-50">
                                                        <div class="elementor-widget-wrap">
                                                            <div class="elementor-element elementor-element-52173b2e">
                                                                <div class="elementor-widget-container">
                                                                    <ul class="elementor-icon-list-items">
                                                                        <li class="elementor-icon-list-item">
                                                                            <span class="elementor-icon-list-text">
                                                                                Beneficial Strategies
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-4fd6ec36">
                                                                <div class="">
                                                                    <p>
                                                                        Global Colliance is your trusted partner as an overseas education consultant for a
                                                                        brighter future. We aim to provide students with diverse programs that help them master their skills, encourage growth, critical thinking, self-expression, and
                                                                        multitasking.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-17a2da7d">
                                                        <div class="elementor-element-populated">
                                                            <div class="elementor-element elementor-element-3dc20315">
                                                                <div class="elementor-widget-container">
                                                                    <ul class="elementor-icon-list-items">
                                                                        <li class="elementor-icon-list-item">
                                                                            <span class="elementor-icon-list-text">
                                                                                Preparation Series
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-da30c6b">
                                                                <div class="elementor-widget-container">
                                                                    <p>
                                                                        Global Colliance offers IELTS, PTE, TOEFL and Duolingo
                                                                        exam preparation services for students aspiring to study
                                                                        abroad. With our expert overseas consultancy services,
                                                                        you can explore global horizons. We are committed to a
                                                                        personalized approach to teaching.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <div class="elementor-element elementor-element-2c59aa4d">
                                                <div class="">
                                                    <div class="jeg-elementor-kit jkit-button">
                                                        <a href="#" class="jkit-button-wrapper">Read More</a>
                                                    </div>
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
        </>
    );
};

export default AbousComponet;