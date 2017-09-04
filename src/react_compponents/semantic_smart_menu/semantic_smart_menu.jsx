import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';

import {
    Button,
    Container,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

class SmartMenu extends Component {

    constructor() {
        super();
        this.state = {
            showFixedMenu: false
        };
    };

    hideFixedMenu = () => this.setState({
        showFixedMenu: false
    });

    showFixedMenu = () => this.setState({
        showFixedMenu: true
    });

    FixedMenu = () => (
        <Menu fixed='top' size='large'>
					<Container>
						<Menu.Item as='a' active>Home</Menu.Item>
						<Menu.Item as='a'>Blog</Menu.Item>
						<Menu.Item as='a'>Wiki</Menu.Item>
						<Menu.Item as='a'>Developments</Menu.Item>
						<Menu.Item as='a'>About me</Menu.Item>
						<Menu.Menu position='right'>
							<Menu.Item className='item'>
								<Button as='a'>Log in</Button>
							</Menu.Item>
							<Menu.Item>
								<Button as='a' primary>Sign Up</Button>
							</Menu.Item>
						</Menu.Menu>
					</Container>
				</Menu>
    );

    Menu = () => (
        <Container>
            <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
            </Menu>
        </Container>
    );

    
    render() {
        return (
        <Visibility onBottomPassed={this.showFixedMenu} onBottomVisible={this.hideFixedMenu}
              once={false}>

              <Segment inverted textAlign='center' style={{ minHeight: 80, padding: '1em 0em'
                  }} vertical>

                  { this.state.showFixedMenu ?
                  <this.FixedMenu /> : null }

                  <this.Menu />

              </Segment>

          </Visibility>
    )};
}

export default SmartMenu;
