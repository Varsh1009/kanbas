export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>

            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1"> ... </p>
                <p id="wd-p-2">
                    This is the first paragraph. The paragraph tag is used to format
                    vertical gaps between long pieces of text like this one.

                </p>

                <p id="wd-p-3">
                    This is the second paragraph. Even though there is a deliberate white
                    gap between the paragraph above and this paragraph, by default
                    browsers render them as one contiguous piece of text as shown here on
                    the right.
                </p>
                <p id="wd-p-4">
                    This is the third paragraph. Wrap each paragraph with the paragraph
                    tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My favourit recipe Chocolate Chip Cookies:
                <ol id="wd-your-favorite-recipe">
                    <li><h4>Preheat Oven:</h4> Preheat your oven to 350°F (175°C).</li>
                    <li><h4>Cream Butter and Sugars:</h4> In a large bowl, beat the softened butter, granulated sugar, and brown sugar until creamy.</li>
                    <li><h4>Add Eggs and Vanilla:</h4> Beat in the eggs one at a time, then add the vanilla extract and mix well.</li>
                    <li><h4>Combine Dry Ingredients:</h4> In a separate bowl, whisk together the flour, baking soda, baking powder, and salt.</li>
                    <li><h4>Mix Dry Ingredients with Wet: </h4>Gradually add the dry ingredients to the wet ingredients, mixing until just combined.</li>
                    <li><h4>Add Chocolate Chips:</h4> Stir in the chocolate chips</li>
                    <li><h4>Scoop Dough:</h4> Drop rounded tablespoons of dough onto ungreased baking sheets</li>
                    <li><h4>Bake:</h4> Bake for 10-12 minutes, or until the edges are golden brown but the centers are still soft.</li>
                    <li><h4>Cool:</h4> Let the cookies cool on the baking sheets for a few minutes before transferring them to a wire rack to cool completely.</li>
                    <li><h4>Serve and enjoy!</h4></li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id="wd-your-books">
                    <li><strong>"To Kill a Mockingbird" by Harper Lee</strong> - A powerful novel about justice and morality in the Deep South.</li>
                    <li><strong>"1984" by George Orwell</strong> - A dystopian classic exploring themes of surveillance and totalitarianism.</li> <li><strong>"Pride and Prejudice" by Jane Austen</strong> - A beloved romantic novel that also offers sharp social commentary.</li> <li><strong>"The Great Gatsby" by F. Scott Fitzgerald</strong> - A portrait of the American Dream and its discontents in the Roaring Twenties.</li> <li><strong>"One Hundred Years of Solitude" by Gabriel García Márquez</strong> - A seminal work of magical realism that tells the multi-generational saga of the Buendía family.</li>
                    <li><strong>"Moby-Dick" by Herman Melville</strong> - An epic tale of obsession and the sea, rich with symbolism and philosophical insights.</li> <li><strong>"The Catcher in the Rye" by J.D. Salinger</strong> - A novel exploring teenage angst and rebellion through the eyes of Holden Caulfield.</li>
                    <li><strong>"The Road" by Cormac McCarthy</strong> - A harrowing and beautifully written story of survival in a post-apocalyptic world.</li> <li><strong>"The Hobbit" by J.R.R. Tolkien</strong> - An enchanting fantasy adventure that serves as a prelude to the Lord of the Rings trilogy.</li> <li><strong>"Beloved" by Toni Morrison</strong> - A haunting and powerful exploration of slavery's legacy through the story of Sethe and her haunted past.</li>
                </ul>


            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td>95</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>






            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet:
                <br />
                <img id="wd-starship"
                    width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                    alt="normal img"
                />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="images/tesla_bot.jpg" alt="tesla bot" height="200px" />
            </div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
                    <br />
                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
                        value="Wonderland" title="The last name" />
                    <h4>Other HTML field types</h4>

                    <label htmlFor="wd-text-fields-email"> Email: </label>
                    <input type="email"
                        placeholder="jdoe@somewhere.com"
                        id="wd-text-fields-email" /><br />

                    <label htmlFor="wd-text-fields-salary-start"> Starting salary:
                    </label>
                    <input type="number"
                        id="wd-text-fields-salary-start"
                        placeholder="1000"
                        value="100000" /><br />

                    <label htmlFor="wd-text-fields-rating"> Rating: </label>
                    <input type="range" id="wd-text-fields-rating"
                        placeholder="Doe"
                        max="5"
                        value="4" /><br />

                    <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                    <input type="date"
                        id="wd-text-fields-dob"
                        value="2000-01-21" /><br />


                </form>
                <h5>Text boxes</h5>
                <label>Biography:</label><br />
                <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                <h5 id="wd-buttons">Buttons</h5>
                <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                    Hello World!
                </button>
                <h5>File upload</h5>
                <input id="wd-upload" type="file" />

                <h5 id="wd-radio-buttons">Radio buttons</h5>

                <label>Favorite movie genre:</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-comedy" />
                <label htmlFor="wd-radio-comedy">Comedy</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-drama" />
                <label htmlFor="wd-radio-drama">Drama</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-scifi" />
                <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
                <label htmlFor="wd-radio-fantasy">Fantasy</label>

                <h5 id="wd-checkboxes">Checkboxes</h5>
                <label>Favorite movie genre:</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
                <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                <label htmlFor="wd-chkbox-drama">Drama</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
                <h4 id="wd-dropdowns">Dropdowns</h4>

                <h5>Select one</h5>
                <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">
                        Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
                <select id="wd-select-many-genre" multiple>
                    <option selected value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">
                        Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>
                <h4>Anchor tag</h4>
                Please
                <a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
                to get dummy text.<br />



                Please
                <a id="wd-github" href="https://github.com/shivamsinghlive/kanbas-react-web-app">visit the GitHub repository</a>.






            </div>


        </div>

    );
}

