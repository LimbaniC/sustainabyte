Design and Style Guidelines

Page Design and Styling:
- All pages should have the navbar uptop.
- Page content should begin 9rem below the top of the page. 
- Components being rendered on pages should adhere to component + text + button styling guidelines below.
- background-color: #497D74

Text Styling:
font-family: "Sono", monospace
letter-spacing: 0.01rem
color: black
(headings, generally) font-size: 16px
(body, generally) font-size: 28px

Component Styling:
- Avoid using excessive animation or transitions, make sure they don't alter default component size.
background-color: #f9f9f
(for textboxes) background-color: white
border-radius: 8px 8px 8px 8px
(for text inputs) border: 2px solid #ddd
box-shadow: box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

Button Styling:
Note: this will need to be changed to ensure WCAG contrast compliance
color: #4CAF50
(hover) color: #4CAF50

Screen Responsiveness:
- Components should have a set max-width and shrink with their container (when window size decreases).
- In the case that a page displays other components in a grid, the grid must be reactive and decrease/increase as window size changes.

Accessibility Best-Practices To Consider:
- Make sure to provide alt text to photographs
- Ensure that descriptive tags are used for users utilizing screen readers (Use tags like <title>,<header>, <footer>, <main>, <title>) ** the needs to be worked on, each page needs to be revisited/reviewed **
- Ensure that tags are using in the correct heirarchy/for the correct purpose. Ex: use h1 before h2
- Ensure that colors pass WCAG standards - https://webaim.org/resources/contrastchecker/ ** will need to change button color **