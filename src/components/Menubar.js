import React, { Component } from "react";
import { Button, Grid, Menu, Sidebar } from "semantic-ui-react";
import {
	IoIosMenu,
	IoIosTimer,
	IoIosStats,
	IoIosDocument
} from "react-icons/io";
import logo from "../image/image.png";
import { Link } from "react-router-dom";

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
					style={{ background: "#5bb695", width: "60px", height: "4920px", position: "absolute" }}
				>
					<Button
						id="menuicon"
						disabled={visible}
						onClick={this.handleShowClick}
						style={{ background: "#5bb695", padding: 0, marginLeft: 7, position: "fixed", left: "0"}}
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
					<Button
						onClick={this.handleHideClick}
						style={{ background: "#46b395", marginLeft: "220px" }}
						>
						<IoIosMenu size={30}/>
						</Button>
					<div className="form">
						<img
							src={logo}
							alt="logo"
							style={{
								marginBottom: "25px",
								width: "245px",
                marginLeft: "10px"
							}}
						/>
					</div>

					<Menu.Item
						as={Link}
						to="/"
						style={{
							background: "#dbdbdf",
							marginBottom: "2px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							verticalAlign: "middle",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosTimer
							size={30}
							style={{
								paddingBottom: "3px",
								float: "left",
								marginLeft: "15px",
								marginRight: "15px"
							}}
						/>
						Activity Timer
					</Menu.Item>
					<Menu.Item
						as={Link}
						to="/dashboard"
						style={{
							background: "#dbdbdf",
							marginBottom: "2px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosStats
							size={30}
							style={{
								paddingBottom: "3px",
								float: "left",
								marginLeft: "15px",
								marginRight: "15px"
							}}
						/>
						Diagrams
					</Menu.Item>
					<Menu.Item
						className="item"
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "2px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							verticalAlign: "middle",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosDocument
							size={30}
							style={{
								paddingBottom: "3px",
								float: "left",
								marginLeft: "15px",
								marginRight: "15px"
							}}
						/>
						Reports
					</Menu.Item>
					<div
						className="item"
						as="a"
						onClick={() => {
							localStorage.removeItem("authenticated");
							document.location.href = "./";
						}}
						style={{
							background: "#354151",
							height: "40px",
							width: "50%",
							marginLeft: "22%",
							textAlign: "center",
							color: "white",
							marginTop: "80px",
							border: "1px solid #354151",
							borderRadius: "6px",
						}}
					>
						{" "}
						Logout
					</div>
				</Sidebar>
			</Grid>
		);
	}
}

export default Menubar;
