import React, { FC } from 'react';

interface BgImage {
    image: string
}

const BackgroundImage: FC<BgImage> = ({ image }) => {
    const styles = {
        container: {
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        },
        overlay: {
            background: 'rgba(39,62,84,0.82)',
            overflow: 'hidden',
            height: '100%',
            Zindex: '2'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}>
                {image}
            </div>

        </div>
    )
}

export default BackgroundImage;