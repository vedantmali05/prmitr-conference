import React from 'react';
import Timeline from './Timeline';

const AboutConference = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">

                    {/* Right Column: Content */}
                    <div className="prose prose-lg max-w-none mt-8 lg:mt-0">
                        <Timeline />
                    </div>
                    
                    {/* Left Column: Sticky Image */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-18">
                            <h2 className="text-3xl font-bold text-gray-900">
                                About the Conference
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
                            </p>
                            <p>
                                Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi in ipsto, rhoncus sed, Viverra et, nulla. Ut scelerisque, sapien quis volutpat for me, est. Praesent egestas leo in pede. Praesent blandit odio eu enim.
                            </p>
                            <p>
                                Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi in ipsto, rhoncus sed, Viverra et, nulla. Ut scelerisque, sapien quis volutpat for me, est. Praesent egestas leo in pede. Praesent blandit odio eu enim.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutConference;