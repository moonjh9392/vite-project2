import ReactDOMServer from 'react-dom/server';
import App from './App.jsx';
import ReactRouter from 'react-router-dom/server';

const StaticRouter = ReactRouter.StaticRouter;

export function render() {
  const html = ReactDOMServer.renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>,
  );
  return { html };
}
