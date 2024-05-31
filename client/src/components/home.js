import React from "react";
import "./home.css";
import treatment1 from "../images/CancerCare.jpg"
import treatment2 from "../images/PainManagement.jpg"
import treatment3 from "../images/ChildrenHealth.jpg"
import treatment4 from "../images/ImagingServices.jpg"
import treatment5 from "../images/ConvenientCare.jpg"
import treatment6 from "../images/StrokeCare.jpg"
import treatment7 from "../images/DiabetesCare.jpg"
import treatment8 from "../images/InfusionServices.jpg"
import treatment9 from "../images/DigestiveHealth.jpg"
import treatment10 from "../images/PrenatalCare.jpg"
import treatment11 from "../images/HeartCare.jpg"
import treatment12 from "../images/Mammography.jpg"
import staff from "../images/HealthCareWorkers.jpg"

const Home = () => {
    return(
        <> 
        <header>
            <div class="main_header_div">
                <h1>Libertas et Aequalitas Community Clinic</h1>
            </div>
            <div class="main_div_image">
                <img src={staff}/>
            </div>
            <br></br>
            <br></br>
        </header>
        <main>
            <h2>Cancer Care</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Preventing the Spread of Cancer</li>
                <li>Slowing or Stopping Cancer Growth</li>
                <li>Reducing the Chance of Cancer Recurrence</li>
                <li>Curing Cancer</li>
            </ul>
            <div class="div_image">
            <img src={treatment1} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </main>
        <aside>
            <h2>Pain Management</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Reducing Pain</li>
                <li>Improving the Quality of Life</li>
                <li>Preventating Further Injury</li>
                <li>Reducing Stress</li>
            </ul>
            <div class="div_image">
            <img src={treatment2} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </aside>
        <main>
            <h2>Children's Health</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Protection from Serious Diseases</li>
                <li>Aiding in Healthy Physical and Cognitive Development</li>
                <li>Reducing Time Away From School and Other Activities</li>
                <li>Treating Childhood Injuries</li>
            </ul>
            <div class="div_image">
            <img src={treatment3} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </main>
        <aside>
            <h2>Imaging services</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Aiding in the Treatment of Injury and Disease</li>
                <li>Early and Accurate Diagnosis</li>
                <li>Allowing for in-depth and Non-Invasive Exploration of Internal Anatomy</li>
                <li>Monitoring Therapies and treatments</li>
            </ul>
            <div class="div_image">
            <img src={treatment4} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </aside>
        <main>
            <h2>Convenvient Care</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Minimal Wait Times</li>
                <li>Easy Assessibility</li>
                <li>No Appointments Needed</li>
                <li>FAST Treatment for Minor Injuries and Illnesses</li>
            </ul>
            <div class="div_image">
            <img src={treatment5} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </main>
        <aside>
            <h2>Stroke Care</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Maximizes Independence in the Activities of Daily Living</li>
                <li>Helping Patients Regain Lost Abilities</li>
                <li>Improving Quality of Life</li>
                <li>Restoring Mobility</li>
            </ul>
            <div class="div_image">
            <img src={treatment6} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </aside>
        <main>
            <h2>Diabetes Care</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Reducing Risks of Complications</li>
                <li>Aiding in the Implimentation of Healthier Lifestyle Changes</li>
                <li>Aiding in Glucose Monitoring</li>
                <li>Lowering Blood Pressure</li>
            </ul>
            <div class="div_image">
            <img src={treatment7} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </main>
        <aside>
            <h2>Infusion Services</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Aiding in Weight Loss</li>
                <li>Preventingand Treating Dehydration</li>
                <li>Replenishing Deficient Nutrients</li>
                <li>Boosting Mental Health</li>
            </ul>
            <div class="div_image">
            <img src={treatment8} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </aside>
        <main>
            <h2>Digestive Health</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Improving Weight Management</li>
                <li>Improving Energy Levels</li>
                <li>Reducing the Risk of Digestive Issues</li>
                <li>Making the Immune System Better</li>
            </ul>
            <div class="div_image">
            <img src={treatment9} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </main>
        <aside>
            <h2>Prenatal Care</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Identifying Potential Health Problems with Mother and/or Fetus</li>
                <li>Reducing the Risks of Complications</li>
                <li>Providing Education and Support to Mothers</li>
                <li>Helping Ensure that the Medications Women Take Are Safe</li>
            </ul>
            <div class="div_image">
            <img src={treatment10} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </aside>
        <main>
            <h2>Heart Care</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Improving Heart Function</li>
                <li>Preventing Heart Problems</li>
                <li>Reducing the Risks of Chronic Conditions</li>
                <li>Improving Fitness</li>
            </ul>
            <div class="div_image">
            <img src={treatment11} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </main>
        <aside>
            <h2>Mammography</h2>
            <h3>Benfits:</h3>
            <ul>
                <li>Early Detection of Breast Cancer</li>
                <li>Fewer Extensive Treatments</li>
                <li>Reducing Morbidity</li>
                <li>Better Chances For A Cure</li>
            </ul>
            <div class="div_image">
            <img src={treatment12} />
            </div>
            <div class="paragraph_div">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            </div>
        </aside>
            
        <footer>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat ad cum quisquam nemo fugiat minus itaque magni dolor ipsam! Debitis corrupti perferendis distinctio, eum animi temporibus architecto vitae eius harum ipsum et nisi ex vel consequuntur iure nesciunt deleniti sed dolor dignissimos ea, sequi ullam inventore rerum! Sunt, magnam! Amet quos dolorum magnam voluptatibus possimus saepe veniam eos dignissimos cumque iusto quam numquam et sit, eveniet velit ducimus rem atque dolorem inventore! Atque, dolor.</p>
            <h3>322 Commercial Main St.</h3>
            <h3>Fictionton, PR 10269</h3>
            <h3>417-555-1234</h3>
        </footer>
      </>
    )
}

export default Home;