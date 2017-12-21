import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AppContainer as HotContainer } from 'react-hot-loader';
import Accordion from '../src/index.jsx';

import ReactDOM from 'react-dom';

function render(Component) {
	ReactDOM.render(
		<HotContainer>
			<div style={{ "padding": "30px" }}>
				<Component title={'Test title'} isOpen>
					<span>Lorem ipsum dolor sit amet, eos choro dolor mnesarchum ne, nostrum facilisi adipisci at usu. No qui liber integre epicurei, duo ex officiis inciderint. Vix iuvaret saperet eleifend id, sit nostrud aliquam an, verear fastidii temporibus ius cu. In postea dolorem vis, quo id persecuti argumentum. Nec no facilisis torquatos, modus utroque his ad.

						Has mucius delicata ad. Modo albucius qui eu, epicurei philosophia nec te, his eius omnesque dissentiet in. An eam cibo ullum, debitis patrioque dissentiunt sed no. Choro tincidunt id sit, cetero accommodare ei quo. Error consequuntur ne eum, an per prompta molestie.

						Liber docendi sensibus vel ut, et possit fabulas eos. Te nam legere saperet scribentur. Oportere tincidunt mel in, sea denique noluisse electram in, pro ne inimicus contentiones. Et est suas atqui intellegam.

						Adhuc tantas postulant sit ei. Mucius aliquip constituam vix id. Posidonium conclusionemque est ea. Id iracundia sententiae eam, per ex duis viris melius. Per at adipisci oportere, cu quot quando mei.

						Cum ad laudem sapientem. Mel no ullum pertinacia, sit ne amet nihil eruditi, partiendo torquatos ex vix. Quo cetero corpora id. Animal suscipit intellegebat ius et. His ad suas unum inimicus, pro dico omnes alienum cu. Facer aliquando cu sed, vel convenire adversarium cu, ea erat libris vocibus sit. Te usu choro mediocrem, labore inimicus consequuntur id usu, cum alii aliquando in.</span>
				</Component>
			</div>
		</HotContainer>,
		document.getElementById('react')
	);
}

render(Accordion);

if (module.hot) {
	module.hot.accept('../src/index', () => {
		render(ComboSearch);
	});
}
