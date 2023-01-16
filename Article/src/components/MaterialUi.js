import React from 'react';
import muiImage from '../assets/mui_app.png';

export default function MaterialUi() {
  return (
    <article>
      <h2>Material UI for React</h2>
      <p>
        Material UI is a popular user interface library for React. It provides a set of reusable components that follow 
        the <a href="https://m3.material.io/foundations" target="_blank" rel="noreferrer">Material Design guidelines</a>, 
        which were created by Google to provide a consistent visual language across all platforms and devices.
      </p>
      <section>
        <h3>Getting started</h3>
        <p>To start using Material UI components in your React application, run the following command: </p>
        <code className='code-block'>npm install @mui/material @emotion/react @emotion/styled</code>
        <p>Or, if you are using yarn:</p>
        <code className='code-block'>yarn add @mui/material @emotion/react @emotion/styled</code>
        <p>It is also advised to install Roboto font. Material UI components were created to be used with it.</p>
        <code className='code-block'>npm install @fontsource/roboto</code>
        <p>For this to take effect, you will also need to add these import statements to the index.js file of your application:</p>
        <code className='code-block'>{`import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';`}
        </code>
      </section>
      <section>
        <h3>Create a page with an AppBar and MUI Container</h3>
        <p>The main page in the Material UI application typically has appbar/toolbar fixed on the top,
            main working area in the middle, and (optionally) sidebar or footer (status bar) on the bottom of the page.
            The simplest application then looks something like this:
        </p>
        <code className='code-block'>{`export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <ToolBar>
          <Typography variant="h5">Application name</Typography>
        </ToolBar>
      </AppBar>
      <ToolBar></ToolBar>
      <Container maxWidth="lg">
        <Typography>
          The main content goes here!
        </Typography>
      </Container>
    </>
  );
}`}
        </code>
        <p> There are several things that you can notice in this small snippet. First of all, <code>&lt;Typography&gt;</code> is used for all the text blocks.
        This component has a limited set of variants for the text styling, making sure that all text is styled consistently across the application. You can 
        find all the different variants in the <a href="https://mui.com/material-ui/react-typography/" target="_blank" rel="noreferrer">API documentation</a></p>
        <p> Another useful prop that the &lt;Typography&gt; element has is called <code>gutterBottom</code>. It adds a margin to the bottom
        of the element to separate different paragraphs visually from each other.</p>
        <p> <code>&lt;CssBaseline&gt;</code> is a CSS Reset that is developed with the Material UI in mind. Besides the usual stuff
        like removing all the margins and setting <code>box-sizing</code> to <code>border-box</code>, it also sets some default values like background color to 
        the values that are suggested by Material guidelines.</p>
        <p><code>&lt;AppBar&gt;</code>'s default display property is <code>fixed</code>, which means that it always stays on top of the page.
        Since this also removes it from the usual layout flow, we need to adjust other content so that it isnt hidden behind the toolbar. We do this by adding a 
        second <code>&lt;ToolBar&gt;</code> element that has the same size(height) as the <code>&lt;AppBar&gt;</code> before it. </p>
        <p>Finally, <code>&lt;Container&gt;</code> component is used to wrap the main content of the application. Its property <code>maxWidth</code> &nbsp;
        limits the width of the content to limit its spread on wider screens.</p>
      </section>
      <section>
        <h3>Component layout with Grid</h3>
        <p>Material UI for React uses similar system to the Bootstrap UI, where it provides a layout container that splits the available width
          into 12 identical columns. In Material UI, <code>&lt;Grid&gt;</code> component is used for this purpose. A typical usage of <code>&lt;Grid&gt;</code>&nbsp;
          looks something like this:
        </p>
        <code className='code-block'>{`<Grid container spacing={1}>
  <Grid item xs={12} md={6}>
    item one
  </Grid>
  <Grid item xs={12} md={6}>
    item two
  </Grid>
</Grid>`}
        </code>
        <p>There are 2 things you can notice here:</p>
        <ol>
          <li><code>&lt;Grid&gt;</code> takes the roles of both container and contained item. Which one it is, is determined by the props <code>container</code> and <code>item</code></li>
          <li>Material UI supports responsive design by introducing breakpoints into its different components. In this example, breakpoints <i>xs</i>
          (for extra small) and <i>md</i>(for medium) are used. Usually the value of the breakpoints changes the dimensions of the component,
          in this case, it corresponds to #of columns that each of the items spans.</li>
        </ol>
      </section>
      <section>
        <h3>MUI Customization</h3>
        <p>There are multiple ways to customize the look and feel of Material UI components. First of all, you can customize the theme using <code>createTheme()</code>
        function, that will create a theme object for you that you can apply to the application with the <code>&lt;ThemeProvider&gt;</code>component. This
        will allow you to set your own color pallete, text styles, layout breakpoints and other such variables. You can also use the theme
        variables in your own components with the <code>useTheme()</code> hook.</p>
        <p>Another option is to use <code>sx</code> prop that exists on every Material UI component. It is like the <code>style</code> prop and
        allows you to specify inline styling, with the advantage of extended CSS syntax. For example, this SASS-like styling is possible:</p>
        <code className='code-block'>
{`<Slider
  defaultValue={30}
  sx={{
    width: 300,
    color: 'success.main',
    '& .MuiSlider-thumb': {
      borderRadius: '1px',
    },
  }}
/>
`}
        </code>
        <p> If you find yourself using the same styles for your components again and again, you can take advantage of the <code>styled()</code>
        function to create a new component that encapsulates your preferred style:</p>
        <code className='code-block'>
{`const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: \`0px 0px 0px 8px \${alpha(theme.palette.success.main, 0.16)}\`,
    },
    '&.Mui-active': {
      boxShadow: \`0px 0px 0px 14px \${alpha(theme.palette.success.main, 0.16)}\`,
    },
  },
}));

export default function StyledCustomization() {
  return <SuccessSlider defaultValue={30} />;
}
`}
        </code>
        <p>As you can see, Material UI for React provides a lot of options for customization for every use case.</p>
      </section>
      <section>
        <h3>Conclusion</h3>
        <figure>
          <img src={muiImage} alt='app build with Material UI' className='mui-image'></img>
          <figcaption>Meme generator app built with MaterialUI components.</figcaption>
        </figure>
        <p>Material UI provides a wide range of components that can be used to build a complete user interface. This includes 
          form elements, navigation components, and even more complex components such as data tables and modals. This makes it 
          a great choice for building both simple and complex applications.
        </p>
        <p>
          Overall, Material UI offers a comprehensive set of components that follow Material Design guidelines, it is highly 
          customizable and easy to integrate with other React libraries, and has a active community. All of these factors make 
          it a great choice for building user interfaces with React.
        </p>
      </section>
    </article>
  )
}
