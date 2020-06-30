import React, { Component } from "react"
import Psych from "./Psych"

class Science extends Component{
        constructor() {
            super()

            const slides = [
                 {
                    chapter: 'What Goes Into A Sunset',
                    description: `The sunset symbolizes the completion of a day's work and shows the passage of time. As the sun sets, it is time to end the day and take a break. The awesome beauty of the setting sun is also symbolic of the beauty and mystery of life itself. Click below to see what why we see this beauty.`,
                    image: 'https://res.cloudinary.com/dkhiieq9p/image/upload/v1588127534/nature-sky-sunset-the-mountains-66997_fj2xtk.jpg'
                },
                {
                    chapter: 'When A Sunset Occurs',
                    description: 'A sunset occurs when the sun reaches the horizon therefore releasing rays of light through the atmosphere. When the sun has reached an angel of 0º to the point of contact (in this case the human eye) that is when a sunset occurs and we enter into a time called the civil twilight.',
                    image: 'https://res.cloudinary.com/dkhiieq9p/image/upload/v1589304371/Twilight_description_full_day.svg_fc2pi0.png',
                }, 
                {
                    chapter: 'Post-Sunset and Twilight',
                    description: 'During the civil twilight is when the colors really start to take shape. As a ray of white sunlight travels through the atmosphere to an observer, some of the colors are scattered out of the beam by air molecules and airborne particles, changing the final color of the beam the viewer sees.',
                    image: 'https://res.cloudinary.com/dkhiieq9p/image/upload/v1589304371/1920px-Twilight_subcategories.svg_syyyyv.png',
                }, 
                 {
                    chapter: 'Into the Night',
                    description: 'Because the shorter wavelength components, such as blue and green, scatter more strongly, these colors are preferentially removed from the beam. Colors begin to become less bright during nautical twilight due to the beginning of artificial light use on roads, buildings, etc. ',
                    image: 'https://res.cloudinary.com/dkhiieq9p/image/upload/v1593547239/240px-Dusk-A330_cnpqnc.jpg',
                }
            ]

            this.state = {
                chapter: slides[0].chapter,
                description: slides[0].description,
                image: slides[0].image
            }
        }

        // behindTheSunset() {
        //     if(this.state.chapter === slides[0].chapter) {
        //         this.setState({
        //             chapter: slides[1].chapter,
        //             description: slides[1].description,
        //             image: slides[1].image
        //         })
        //     }
        //  };

    render() {
        return(
                <>
                <div>
                <Psych chapter={this.state.chapter} description={this.state.description} image={this.state.image}/>
                </div>
                <button onClick={this.behindTheSunset}> Learn More! </button>
                </>
        )
    }
}

export default Science