const Content = () => {
    return(
        <div className="content">
            <div className="topImage">
                <img src="data:image/jpeg;base64,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" alt="topImage"/>
            </div>
            <div className="aboutUser">
                <div className="avatar">
                    <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatar"/>
                </div>
                <div className="info">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nemo soluta veniam! Provident saepe, velit.</span>
                </div>
            </div>
            <div className="enterPost">
                <span>Write the post</span>
            </div>
            <div className="posts">
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    )
}

export default Content