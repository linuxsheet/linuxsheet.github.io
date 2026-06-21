import { Link } from "react-router-dom";

function Filesystem() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Path</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>/</td>
            <td>Root (all files are here)</td>
          </tr>
          <tr>
            <td>/etc</td>
            <td>Configuration files</td>
          </tr>
          <tr>
            <td>/root</td>
            <td>Home directory for 'root' user</td>
          </tr>
          <tr>
            <td>/usr</td>
            <td>Files matter users like binaries, libraries etc.</td>
          </tr>
          <tr>
            <td>/bin</td>
            <td>
              Executable files are there. <span className="info">*</span>
            </td>
          </tr>
        </tbody>
      </table>
      <br /> <br />
      <p className="info">
        * In most systems, this is a symlink to /usr/bin. But some systems store
        their 'core' programs like cp, rm, ls etc. there.
      </p>
    </div>
  );
}

export default Filesystem;
