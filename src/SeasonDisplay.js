import React from 'react';
import './SeasonDisplay.css';

const getSeason = (enlem, ay) => {
	if (ay < 2 && ay > 10) {
		return enlem > 0 ? 'winter' : 'summer';
	} else if (ay > 1 && ay < 5) {
		return enlem > 0 ? 'spring' : 'autumn';
	} else if (ay > 4 && ay < 8) {
		return enlem > 0 ? 'summer' : 'winter';
	} else if (ay > 7 && ay < 11) {
		return enlem > 0 ? 'autumn' : 'spring';
	}
};

const seasonDisplayConfig = {
	winter: {
		background:
			'https://www.nawpic.com/media/2020/winter-background-nawpic-3.jpg',
	},
	summer: {
		background:
			'http://artsoiree.com/wp-content/uploads/2016/06/caribbean-sunset-1080.jpg',
	},
	spring: {
		background:
			'https://jogamaya.cz/wp-content/uploads/2020/03/spring-276014_1920.jpg',
	},
	autumn: {
		background: 'https://www.enjpg.com/img/2020/autumn-desktop-5.jpg',
	},
};

const SeasonDisplay = ({ enlem }) => {
	const season = getSeason(enlem, new Date().getMonth());
	const { background } = seasonDisplayConfig[season];

	return (
		<div
			className={`season-display ${season}`}
			style={{ background: `url(${background})` }}
		>
			<p className="article">It's {season} here.</p>
		</div>
	);
};

export default SeasonDisplay;
