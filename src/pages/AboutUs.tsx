
import officeImage from '../assets/resources/Img_002.jpg'

const AboutUs = () => {
  return (
    <div className="about-us-simple">
      <div className="about-container">
        <div className="about-content-simple">
          <h1>About us</h1>
          
          <p>
            Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar enim sed quam efficitur finibus. Fusce efficitur condimentum orci in hendrerit. Etiam aliquam vitae ante et scelerisque. 
            Pellentesque commodo felis metus, nec congue nisl facilisis quis. Aenean maximus bibendum congue. Nulla pretium elit non facilisis imperdiet. Curabitur auctor lacus turpis, quis fringilla quam 
            faucibus sed. Sed consequat magna enim, eu efficitur purus viverra sit amet. <a href="#" className="about-link">Praesent varius porta blandit mollis</a>, felis ut convallis convallis.
          </p>
          
          <p>
            Quisque non lectus dolor. In id dictum ex. Aenean laoreet velit sem, in dictum orci cursus sit amet. Duis ex est, aliquam quis tincidunt ut, imperdiet a lacus. Vestibulum condimentum vehicula 
            nisl, at vestibulum velit varius sit amet. Cras lacinia facilisis tempus. Fusce nec tempus mauris. Sed vitae diam porta, tincidunt orci ac, maximus enim. Integer sodales sodales turpis, sit amet 
            ultrices arcu lacinia id. Pellentesque volutpat in massa sit amet venenatis. Aliquam erat volutpat. Sed mollis, felis ut convallis convallis, nibh quam fringilla metus, a tempus metus nunc a sem. 
            Morbi ut orci convallis, mollis orci quis, efficitur nibh.
          </p>

          <div className="about-image-simple">
            <img 
              src={officeImage} 
              alt="Modern office space with colorful chairs and open workspace" 
            />
          </div>

          <p>
            Integer ullamcorper nisl non ultricies consequat. Mauris at ipsum vel erat fringilla placerat ut eget nibh. Mauris vehicula a lectus dignissim ultrices. Sed congue nec libero sit amet vestibulum. 
            Donec dignissim nec ligula quis placerat. Vivamus ornitor sed urna nec semper. Ut quis bibendum, est vitae placerat ultricies, diam massa congue magna, quis blandit nibh ante vitae nibh. 
            Aliquam eu lobortis augue, eu vestibulum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ligula vitae nisl blandit tempus ut sit amet urna. Mauris convallis nisl a 
            interdum semper. Fusce interdum ullamcorper purus sed aliquam. Fusce ut mollis nisl, quis lacinia quam. Donec ligula metus, volutpat a odio euismod, dapibus iaculis arcu. Ut lobortis magna 
            vehicula laoreet feugiat.
          </p>

          <h3>Taria duo ut vis semper abhorreant:</h3>
          
          <ul className="about-list">
            <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
            <li>Te nam dolorem rationibus repudiandae, ne ius falli aliquip consequat</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
