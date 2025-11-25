# Memory Game – Two Players

Memory Game – Two Players is an interactive JavaScript card-matching game designed for users who enjoy competitive logic challenges. The game allows two players to compete in real time, flipping cards to find matching pairs while the interface keeps track of the current round score and total matches won.

The main purpose of this application is to demonstrate JavaScript interactivity, DOM manipulation, responsive layouts, and user experience design. It is targeted toward casual players, students, and individuals interested in simple browser-based games. The project is fully responsive and accessible across all devices.

![Responsice Mockup](https://github.com/cscode07/Memory-Game/blob/main/assets/mockup.png)
["Link"](https://ui.dev/amiresponsive?url=https://cscode07.github.io/Memory-Game/)



## Features 

### Existing Features

- __Header__
  
Displays the game title and tagline clearly at the top of the page.

Immediately communicates the purpose of the site to the user.

![Header](https://github.com/cscode07/Memory-Game/blob/main/assets/header.png)



- __Player Panels__
  
The game includes two player panels, one on each side of the board on desktop/tablet and stacked on mobile:

 -Users can enter their names.
 
Each panel displays:

 -Round Score
 
 -Total Matches Won
 
 -The active player is highlighted visually.
 
 -Helps players track progress and stay engaged.
 
![Player Panels](https://github.com/cscode07/Memory-Game/blob/main/assets/player.png)



- __Game Board (Cards Grid)__

-A 5 × 4 responsive grid containing 20 cards (10 pairs).

-Cards are generated dynamically via JavaScript.

-Each card flips when clicked and displays a custom image.

-Provides interactive feedback (flipped, matched).

![Game Board](https://github.com/cscode07/Memory-Game/blob/main/assets/board.png)



- __Restart Round Button__

-Resets the board and reshuffles cards.

-Maintains Total Matches Won.

-Useful for starting a new round without resetting all progress.

![Restart](https://github.com/cscode07/Memory-Game/blob/main/assets/restart.png)



- __Reset All Button__

Fully resets:

-Player names

-Round scores

-Total matches won

-Resets the board and restarts the entire game logic.

![Reset](https://github.com/cscode07/Memory-Game/blob/main/assets/reset.png)



- __Status Message__

- Displays real-time feedback:

-Whose turn it is

-Instructions

-Provides clear guidance and enhances user experience.

![Restart](https://github.com/cscode07/Memory-Game/blob/main/assets/message.png)



- __The Footer__ 

![Footer](https://github.com/cscode07/Memory-Game/blob/main/assets/footer.png)



- __Fully Responsive Layout__

-Desktop/Tablet: Player 1 panel – Game Board – Player 2 panel

-Mobile: Player 1 and Player 2 appear on top, and the board is below

-Achieved with CSS Grid and Media Queries.


- __Features Left to Implement__

-Sound effects for flipping and matching cards

-Timer and time-based scoring

-Difficulty selection (e.g., 16, 24, 30 cards)

-Save scores in localStorage

-Animation improvements for card flipping

-“Best of 3 / Best of 5” match tracker.
  

## User Stories
-User1: I want to enter my name and track my score.

-User2: I want to compete and see who wins most matches.

-User3 (Casual gamer): I want a simple game that is fun and easy to understand.

-User4 (Mobile user): I want the layout to look clean on my phone.

-User5 (teacher) : I want a basic logic game suitable for kids.

## Wireframes

-https://github.com/cscode07/ci-lan-cafe/blob/main/media/Wireframes0.png

-https://github.com/cscode07/ci-lan-cafe/blob/main/media/Wireframes1.png

-https://github.com/cscode07/ci-lan-cafe/blob/main/media/Wireframes2.png

-https://github.com/cscode07/ci-lan-cafe/blob/main/media/Wireframes3.png

-https://github.com/cscode07/ci-lan-cafe/blob/main/media/Wireframes4.png

## Testing 


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/#validate_by_input)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
- Accessibility
![Accessibility](https://github.com/cscode07/ci-lan-cafe/blob/main/media/score.png)


### Manual Testing 

| Feature            | Test Performed               | Expected Outcome             | Result       | Notes                           |
| ------------------ | ---------------------------- | ---------------------------- | ------------ |-------------------------------- |
| Navbar links       | Click each navigation link   | Opens correct page           | ✅ Pass     | Works across all pages           |
| Hero section       | Check image and text overlay | Displays correctly           | ✅ Pass     | —                                |
| Services section   | Review service cards         | Cards visible and responsive | ✅ Pass     | —                                |
| Events section     | Check event display          | Events load properly         | ✅ Pass     | —                                |
| Games (PC/Console) | View both game lists         | Content loads properly       | ✅ Pass     | —                                |
| Booking form       | Open and test fields         | Fields visible and labelled  | ✅ Pass     | —                                |
| Footer             | View on all devices          | Responsive and readable      | ⚠️ Partial  | Bug on small screens (see below) |
| Responsiveness     | Test on multiple devices     | Layout adapts correctly      | ✅ Pass     | —                                |
| External links     | Click social media icons     | Opens in new tab             | ✅ Pass     | —                                |


### User Story Testing

| User Story                  | Test Action                    | Result                        |
| ----------------------------| ------------------------------ | ----------------------------- |
| **User1** – View services   | Navigate to “Services” section | Displays service info clearly |
| **User2** – View games      | Visit “Games” section          | Games listed and categorised  |
| **User3** – View events     | Go to “Events”                 | Events displayed correctly    |
| **User4** – Navigate easily | Use navbar across pages        | Navigation works consistently |
| **User5** – Book session    | Open “Booking”                 | Form visible and functional   |


### Browser Compatibility

Tested successfully on:
-Chrome 
-Firefox
-Edge
-Safari

 ### Device Responsiveness

Checked using Chrome DevTools:
-iPhone SE, iPhone 12, Galaxy S8
-iPad
-Desktop (1366px, 1440px, 1920px)
All layouts displayed as expected.

### Known Bugs

-Footer does not stretch to full width on smaller screens.
It doesn’t scale edge-to-edge with the viewport on mobile devices.


 
## Deployment

The live link can be found here - (https://github.com/cscode07/ci-lan-cafe/settings/pages)

Technologies Used
-HTML5
-CSS
-GitHub Pages



## Credits 

### Content 

- The text for the Home page was taken from (https://liquipedia.net/) and (https://www.google.com/).
- All the coding structure and logic were taken from previous Code Institute lessons (Diploma in Full Stack Software Development) (https://codeinstitute.net/).
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media


- All photos used were taken from (https://www.google.com/).









