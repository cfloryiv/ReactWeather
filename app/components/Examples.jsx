var React=require('react')
var {link} = require('react-router');
//
// var Examples=React.createClass({
//   render: function() {
//     return (
//       <h2>Examples component</h2>
//     )
//   }
// });
var Examples=(props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out.</p>
      <ol>
          <li>
            <link to='/?location=Boston'>Boston, MA</link>
          </li>
          <li>
            <link to='/?location=New York'>New York</link>
          </li>
      </ol>
    </div>

  )
};
module.exports=Examples;
