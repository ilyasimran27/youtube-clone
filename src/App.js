import React from 'react';
import youtube from './api/youtube';
import SearchBox from './component/SearchBox';
import VideoDescription from './component/VideoDescription';
import AllVideo from './component/AllVideo';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount() {
        this.onSearchSubmit("buildings");

    }
    onSearchSubmit = async (term) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBSXNJC2Qpa4TSSKWfQvIr8Kt_X_SjUt8g',
                q: term
            }
        });
        console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }
    onVidSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    render() {
        return (
            <div className="container-fluid">
                <SearchBox onFormSubmit={this.onSearchSubmit} />
                <div className="container shadow-lg pt-3 mt-2">

                    <div className="row ">

                        <VideoDescription video={this.state.selectedVideo} />
                        <AllVideo onVidSelect={this.onVidSelect}
                            videos={this.state.videos} />

                    </div>

                </div>
            </div>
        );

    }
}
export default App;