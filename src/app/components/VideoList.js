import React from 'react'

function VideoListImg({ imgUrl }) {
    return (
        <div role="listitem" class="hero-cards_collection-item w-dyn-item">
            <img
                src={imgUrl} loading="eager" alt=""
                class="image" 
                sizes="100vw"/>
            <div class="cards-video-embed w-embed"><video class="lozad" width="100%" height="100%" autoplay="true"
                loop="true" muted="true">
                <source src="" type="video/webm" />
                <source src="" type="video/mp4" />
            </video></div>
        </div>
    )
}

export default VideoListImg