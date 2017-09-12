import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';
// import styles from './style.css'
// import bootStrap from './bootstrap.css'

import {
    Transition,
    Image,
		Dimmer,
		Segment,
    Header,
    Grid
} from 'semantic-ui-react';

class ImageWithAnimationAnnouncement extends Component {

    constructor() {
        super();
        this.state = {
            animation: 'drop',
            duration: 500,
            visible: true
        }
    };



    // onError="this.onError = null; this.src = '{{ site.url }}{{ site.baseurl }}/resources/page/Post/post_blog.jpg';"
    //styles.viewNinth 
    //
    //
    //
    //


    //            <div style={{ height: '300px' }}>
    //                <div className="view viewNinth">
    //                    <a href="www.google.com">
    //                        <img src="http://rogeriodossantos.github.io/MainPage/resources/page/Post/post_scada.jpg"
    //                            className="img-responsive" alt="" />
    //                        <div className="mask mask-1"> </div>
    //                        <div className="mask mask-2"> </div>
    //                        <div className="content">
    //                            <h2># post.subject #</h2>
    //                            <p className="content" style={{ marginTop: '11px', height: '80px' }}>## post.content | strip_html | truncatewords:40 ##</p>
    //                        </div>
    //                    </a>
    //                </div>
    //                <h4 className="m_4" style={{ display: 'inherit', textAlign: '-webkit-center', }}><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">## post.title | truncatewords:30 ##</a></h4>
    //            </div>

    handleShow = () => this.setState({
        active: true
    });

    handleHide = () => this.setState({
        active: false
    });

    render() {

        return (
            <div>

              <Grid>
                {/* <Grid.Row columns={4}> */}


                  <Dimmer.Dimmable as={Segment} dimmed={this.state.active}>
                    <Dimmer active={this.state.active} onClickOutside={this.handleHide}>
                      <Header as='h2' icon inverted>
                        ### Description ###
                      </Header>
                    </Dimmer>
                    <Image size='medium' src='http://rogeriodossantos.github.io/MainPage/resources/page/Post/post_scada.jpg' onClick={this.handleShow} />
                    <Header as='h3'>### Title ###</Header>
                  </Dimmer.Dimmable>


                {/* </Grid.Row> */}
              </Grid>

            </div>
        );
    }
}

export default ImageWithAnimationAnnouncement;
