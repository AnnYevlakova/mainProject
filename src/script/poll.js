<div className="box">
	<header className="header">
		<img className="logo" src={img} alt="" />
		<nav className="headerNav">
			<Link header className="link" href="https://www.itechart.com/" target="_blank">about us</Link>
			<MyLink onClick={this.onClick} header to="/">log in</MyLink>
		</nav>
	</header>
	<MainContainer>
		<RegistrationBox id="registrationBox">
			<Caption id="registryCaption">Registration</Caption>
			<MyField onFocus={this.onFocus} id="userName" type="text" placeholder="Username" />
			<MyField onFocus={this.onFocus} id="email" type="text" placeholder="Email address" />
			<MyField onFocus={this.onFocus} id="pas1" type="password" placeholder="Password" />
			<MyField onFocus={this.onFocus} id="pas2" type="password" placeholder="Repeat password" />
			<MainButton onClick={this.onRegistered} id="registration" type="button" value="create an account" />
		</RegistrationBox>
	</MainContainer>
</div>