import React, { Component } from "react";
import { Button, Grid, Menu, Sidebar, Segment } from "semantic-ui-react";
import { IoIosMenu } from "react-icons/io";
import logo from "../image/image.png";
import SaveTimeRecording from "./SaveTimeRecording";

class Menubar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}
	handleHideClick = () => this.setState({ visible: false });
	handleShowClick = () => this.setState({ visible: true });
	handleSidebarHide = () => this.setState({ visible: false });

	render() {
		const { visible } = this.state;

		return (
			<Grid columns={2} style={{ background: "#354152" }}>
				<Grid.Column
					style={{ background: "#5bb695", width: "60px", height: "995px" }}
				>
					<Button
					  id='menuicon'
						disabled={visible}
						onClick={this.handleShowClick}
						style={{ background: "#5bb695", padding: 0, marginLeft: 7 }}
					>
						<IoIosMenu size={30} />
					</Button>
				</Grid.Column>
				<Sidebar
					as={Menu}
					inverted
					onHide={() => {
						this.handleSidebarHide();
					}}
					vertical
					visible={visible}
					style={{
						background: "#46b395",
						width: "300px"
					}}
				>
					<div className="form">
						<img
							src={logo}
							alt="logo"
							style={{
								marginLeft: "27px",
								paddingTop: "20px",
								marginBottom: "25px",
								width: "207px",
								height: "135px"
							}}
						/>
					</div>

					<p id="login_message" style={{color: '#354151', textAlign: 'center'}}>
						Welcome, {this.props.user.toUpperCase()}
					</p>
					<Menu.Item
						className="item"
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "10px",
							width: "80%",
							marginLeft: "10%"
						}}
					>
						Tab1
					</Menu.Item>
					<Menu.Item
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "10px",
							width: "80%",
							marginLeft: "10%"
						}}
					>
						Tab2
					</Menu.Item>
					<Menu.Item
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "10px",
							width: "80%",
							marginLeft: "10%"
						}}
					>
						Tab3
					</Menu.Item>
					<Menu.Item
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "10px",
							width: "80%",
							marginLeft: "10%"
						}}
					>
						Tab4
					</Menu.Item>
					<Menu.Item
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "10px",
							width: "80%",
							marginLeft: "10%"
						}}
					>
						Tab5
					</Menu.Item>
				</Sidebar>
				<Segment basic>
					<SaveTimeRecording />
				</Segment>
			</Grid>
		);
	}
}

export default Menubar;
