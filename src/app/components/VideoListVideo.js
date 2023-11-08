import React from 'react'

function VideoListVideo({ videoUrl, imgUrl, secondVideoUrl }) {
    return (
        <div role="listitem" class="hero-cards_collection-item w-dyn-item"><img
            src={imgUrl} loading="eager" alt=""
            sizes="100vw"
            srcset="https://assets-global.website-files.com/6257582bafd6f37a531ba6fe/625d7cf36e467e8560eafb7e_card-dark-06-p-500.jpeg 500w, https://assets-global.website-files.com/6257582bafd6f37a531ba6fe/625d7cf36e467e8560eafb7e_card-dark-06.jpg 760w"
            class="image" />
            <div class="cards-video-embed w-embed"><video class="lozad" width="100%" height="100%" autoplay="true"
                loop="true" muted="true">
                <source
                    src={videoUrl}
                    type="video/webm" />
                <source
                    src={secondVideoUrl}
                    type="video/mp4" />
            </video></div>
        </div>
    )
}

export default VideoListVideo