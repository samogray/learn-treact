import React from 'react'
import  style from './style.scss'
import Scroll from 'react-scrollbar'
import  classnames from 'classnames'
import  './global.scss'

class Mycomponent extends React.Component {
  render() {
    return (

          <div className={classnames(style.localTest)}>
            <Scroll
              speed={0.8}
              className="area"
              contentClassName="content"
              horizontal={false}
            >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aut expedita harum
              laboriosam
              obcaecati provident recusandae reiciendis repellat similique! Consequuntur corporis fugiat
              ipsum
              molestias mollitia nisi quibusdam repellendus soluta tempora veritatis? Animi, dolor, fuga. Ab
              ad
              aspernatur aut blanditiis commodi consequatur consequuntur corporis cum delectus deleniti
              dicta,
              dolorem, earum eius, eos ex excepturi expedita harum laboriosam laborum magnam molestiae nam
              nostrum
              optio placeat possimus provident quas qui quidem quod sapiente sit soluta voluptate
              voluptates.
              Accusantium amet atque distinctio fuga nam officia voluptatibus. Asperiores commodi
              consectetur
              culpa,
              cupiditate deleniti doloremque, fugiat ipsum modi, nobis odit perferendis quos ratione
              voluptate.
              Animi aperiam, autem beatae consequuntur, dolores dolorum facilis hic, illum labore
              necessitatibus
              perferendis ut vel voluptas. Labore, laudantium quam? Accusantium cupiditate delectus, earum
              eligendi
              enim itaque magni minima minus nesciunt nisi repellat rerum sequi, sint, tempore velit veniam
              voluptates. Ab adipisci animi aperiam architecto asperiores deleniti deserunt distinctio dolor
              doloremque ea eaque eius eligendi est eveniet excepturi fugiat inventore laborum magnam natus
              necessitatibus nobis nulla odio, odit perferendis quas quasi quisquam ratione reiciendis rem
              reprehenderit sint soluta sunt totam velit veniam veritatis voluptatibus. A architecto aut
              deleniti
              eligendi eos fugiat, iusto minus repudiandae saepe sed! Assumenda aut dolorem dolorum, eos ex
              fugit
              harum incidunt iusto magni minima natus nemo nulla, officia omnis quos ratione sequi sint
              voluptas!
              Aperiam expedita harum, in inventore laboriosam nihil nulla odit placeat porro, repudiandae
              totam
              velit? Accusantium architecto consectetur cum cumque cupiditate dolore doloremque eius eum id
              inventore iste maxime nam nulla numquam obcaecati perspiciatis placeat, possimus quam qui
              recusandae
              repudiandae sequi soluta, vitae. Autem, dicta ea eos fugiat ipsum nesciunt nihil, numquam
              pariatur
              possimus repellendus sequi voluptas voluptatibus. Fuga harum maiores maxime molestiae
              quibusdam
              rem
              veniam. Nisi, sed, veniam? Asperiores delectus esse fugit harum hic illo iusto, mollitia optio
              perferendis quos repellendus veritatis? Aliquam atque autem corporis debitis delectus deleniti
              deserunt dicta, ducimus exercitationem explicabo fugiat in incidunt ipsa ipsam itaque iusto
              laborum
              laudantium molestias natus nemo nobis obcaecati odio optio possimus provident quidem
              recusandae
              reprehenderit saepe soluta sunt tempora veritatis voluptatem, voluptatibus? Amet commodi, et
              exercitationem illum laboriosam nulla soluta. Accusantium adipisci dolorum exercitationem illo
              iusto
              laudantium minima officiis quia, quidem recusandae repellat repellendus repudiandae tenetur!
              Amet
              asperiores beatae cum delectus eos esse exercitationem, facere in laborum maiores natus nemo
              nihil,
              nobis non omnis placeat quam, quas quasi quibusdam quis quod tempora velit veniam veritatis
              voluptas?
              Alias at praesentium quidem quos temporibus tenetur unde!</p>
            </Scroll>
          </div>
  )

  }
}

export default Mycomponent