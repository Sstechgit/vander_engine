import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './privacy_policy.css'; // You will add your styles here
import Footer from "../Home/newfooter";

const warrenty_poilicy = () => {
    return (
        <>
        <ParallaxProvider>
            <div className="privacy-policy-container">
                <section className="privacy-section">
                    <Parallax className="parallax-effect" y={[-20, 20]}>
                        <h2>Warranty Policy</h2>
                    </Parallax>
                    <p>
                        Our guarantee approach covers damaged parts and adornments sent by us.
                        We offer a service agreement at pretty much every vehicle part. Our guarantee
                        framework doesn’t cover any type of Labor cost. In a condition where it is
                        discovered that a section is inadequate, first we attempt to supplant it and
                        on the off chance that a substitution is beyond the realm of imagination, at
                        that point we will produce a discount for the aggregate sum that has been charged
                        against your buy. In the event a reorder is made before the arrival of the underlying
                        part we will require forthright installment for the subsequent part and discount.
                    </p>
                    <p>
                        While raising return solicitations to Vander Engines Yard, if it’s not too much trouble
                        give a definite explanation concerning why the part is being returned. In the event,
                        a section is returned which doesn’t coordinate the arrival determination of the part
                        in this guarantee strategy, Used Parts Yard will charge a 25% restocking expense from the
                        complete paid sum. Utilized Parts Yard won’t be at risk if the client will not claim the
                        item at the given location gave during the hour of procurement.
                    </p>
                    <p>
                        Before requesting please confirm it with a specialist or a body master for requesting the
                        correct part. We won’t start any discount and won’t acknowledge any profits if the request
                        made by the client is mistakenly requested. What’s more, the item ought to be returned in 30
                        days from the date it was conveyed.
                    </p>
                    <p>
                        Coming up next are the couple of extraordinary cases that will either void a guarantee or are
                        exceptions to our 30 days merchandise exchange.
                    </p>
                    <p>
                        Motors are amassed totally comprising manifolds, oil skillet, timing covers and belts,
                        fuel infusion or the carburetor, we ensure just for the long square, not for the manifolds,
                        gaskets, seals, hoses, oil container, timing covers, and belts, fuel infusion or the
                        carburetor.
                    </p>
                    <p>
                        In the event that parts bought independently, they will go under guarantee.
                    </p>
                    <p>
                        Different things, for example, water siphon, wholesaler top, flash fittings and
                        wires that might be required to supplant are high-wear parts, Used Parts Yard won’t
                        be subject to them.
                    </p>
                    <p>
                        Electrical things for instance Engine Computers and Body Control Modules,
                        transmission modules, move case modules are not for testing purposes,
                        and just ensured to have the correct producer part number. Every single electrical
                        thing goes under the substitution guarantee as it were. We will send up to one
                        substitution request to correct a non-working module. A module may require to be
                        reset through the vendor. For this situation, a section can’t be returned until
                        the seller checks that the part has been improved appropriately. Also, if there
                        should be an occurrence of the electrical part whenever changed in any capacity
                        won’t acknowledge as an arrival.
                    </p>
                    <p>
                        On account of swaggers, sold in working condition will just go under guarantee.
                        The genuine ride nature of the stuns or springs doesn’t go under guarantee, yet
                        we guarantee that the springs and swagger pinnacle will be in working condition.
                        However, stuns may be changed to upgrade ride quality. Control arms are a guarantee
                        to be unique and straight. The guarantee doesn’t cover any elastic bushings or non-metal
                        parts added to control arms.
                    </p>
                    <p>
                        Portions of Bushings and Ball Joints are not shrouded in the guarantee.
                    </p>
                </section>
                <section className="privacy-section">
                    <Parallax className="parallax-effect" y={[-20, 20]}>
                        <h2>Warranty Policy</h2>
                    </Parallax>
                    <p>
                        Our guarantee approach covers damaged parts and adornments sent by us.
                        We offer a service agreement at pretty much every vehicle part. Our guarantee
                        framework doesn’t cover any type of Labor cost. In a condition where it is
                        discovered that a section is inadequate, first we attempt to supplant it and
                        on the off chance that a substitution is beyond the realm of imagination, at
                        that point we will produce a discount for the aggregate sum that has been charged
                        against your buy. In the event a reorder is made before the arrival of the underlying
                        part we will require forthright installment for the subsequent part and discount.
                    </p>
                </section>
                <section className="privacy-section">
                    <Parallax className="parallax-effect" y={[-20, 20]}>
                        <h2>Transmissions</h2>
                    </Parallax>
                    <p>
                        We guarantee that it will move appropriately, riggings and course would work easily.
                        Altogether need to clean every segment of the transmission including oil dish before
                        gathering. Supplant oil and channel in each programmed transmission. You have to supplant
                        each seal and gasket before establishment. Flush and stream test cooler and lines.
                        Completely connected with a torque converter in a front siphon. In the manual transmission,
                        you ought to introduce another grip, pressure plate, and slave chamber. You likewise need
                        to have your flywheel turned before establishment. Fill and guarantee liquid to guarantee
                        legitimate levels. There is no assurance of Seals in turbo to be great. The seals may
                        be changed in a guaranteed time allotment. Guarantee just covers entryway shell, not
                        the frill, for example, windows, window controllers, handles, pivots, or inside boards.
                        Other body parts for instance hoods, bumpers, guards, quarter boards, and header boards are not ensured to join pivots, hood decorations, locks, trim, headlights, or grilles. In the event that there is a confound of shading on mentioning a particular shade of the body part it won’t be shrouded in guarantee and won’t be considered as an explanation of return, however, we will repaint the body part to coordinate your vehicle.
                    </p>

                </section>
            </div>
        </ParallaxProvider>
        <Footer/>
        </>
    );
};

export default warrenty_poilicy;
