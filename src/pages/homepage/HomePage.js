import React, { Fragment } from 'react';

import image1 from '../../images/grid-img-1.png';
import image2 from '../../images/grid-img-2.png';
import image3 from '../../images/grid-img-3.png';
import image4 from '../../images/grid-img-4.png';
import image5 from '../../images/grid-img-5.png';
import image6 from '../../images/grid-img-6.png';
import image7 from '../../images/grid-img-7.png';
import image8 from '../../images/grid-img-8.png';
import image9 from '../../images/grid-img-9.png';
import image10 from '../../images/grid-img-10.png';

import GridBox from '../../components/grid/GridBox';
import GridContainer from '../../components/grid/GridContainer';
import Button from '../../components/buttons/Button';
import HomePageCard from '../../components/homepage-card/HomePageCard';
import SigninAndSignup from '../../components/user-auth/SigninAndSignup';

function HomePage(props) {
	const [ renderSignup, setRenderSignup ] = React.useState(false);
	const [ renderLogin, setRenderLogin ] = React.useState(false);
	const [ renderAuthCard, setRenderAuthCard ] = React.useState(true);

	return (
		<Fragment>
			{renderAuthCard && (
				<Fragment>
					<HomePageCard
						setRenderLogin={setRenderLogin}
						setRenderSignup={setRenderSignup}
						setRenderAuthCard={setRenderAuthCard}
					/>
				</Fragment>
			)}
			{renderSignup && (
				<Fragment>
					<SigninAndSignup
						history={props.history}
						renderLogin={renderLogin}
						renderSignup={renderSignup}
						setRenderLogin={setRenderLogin}
						setRenderSignup={setRenderSignup}
					/>
				</Fragment>
			)}
			{renderLogin && (
				<Fragment>
					<SigninAndSignup
						history={props.history}
						renderLogin={renderLogin}
						renderSignup={renderSignup}
						setRenderLogin={setRenderLogin}
						setRenderSignup={setRenderSignup}
					/>
				</Fragment>
			)}
			{renderSignup && (
				<Button
					name="Log in"
					onClick={() => {
						setRenderSignup(false);
						setRenderLogin(true);
					}}
					className="auth-link-button"
				/>
			)}
			{renderLogin && (
				<Button
					name="Sign up"
					onClick={() => {
						setRenderLogin(false);
						setRenderSignup(true);
					}}
					className="auth-link-button"
				/>
			)}
			<div className="homepage">
				<GridContainer className="grid-container">
					<GridBox image={image1} className="box box-large" />
					<GridBox image={image2} className="box box-large" />
					<GridBox image={image3} className="box box-medium" />
					<GridBox image={image4} className="box box-medium" />
					<GridBox image={image5} className="box box-medium" />
					<GridBox image={image6} className="box box-small" />
					<GridBox image={image7} className="box box-large" />
					<GridBox image={image8} className="box box-small" />
					<GridBox image={image9} className="box box-large" />
					<GridBox image={image10} className="box box-large" />
					<GridBox image={image1} className="box box-large" />
					<GridBox image={image2} className="box box-large" />
					<GridBox image={image3} className="box box-medium" />
					<GridBox image={image4} className="box box-medium" />
					<GridBox image={image5} className="box box-medium" />
					<GridBox image={image6} className="box box-small" />
					<GridBox image={image7} className="box box-large" />
					<GridBox image={image8} className="box box-small" />
					<GridBox image={image9} className="box box-large" />
					<GridBox image={image10} className="box box-large" />
					<GridBox image={image1} className="box box-large" />
					<GridBox image={image2} className="box box-large" />
					<GridBox image={image3} className="box box-medium" />
					<GridBox image={image4} className="box box-medium" />
					<GridBox image={image5} className="box box-medium" />
					<GridBox image={image6} className="box box-small" />
					<GridBox image={image7} className="box box-large" />
					<GridBox image={image8} className="box box-small" />
					<GridBox image={image8} className="box box-small" />
					<GridBox image={image9} className="box box-large" />
					<GridBox image={image10} className="box box-large" />
				</GridContainer>
			</div>
		</Fragment>
	);
}

export default HomePage;
