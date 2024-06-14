export default function Scores({courseName, listResult}){
    return(
        <div class="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {listResult.map((item)=>{
                return(
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td className={item.score < 50 ?"warning":""}>{item.score}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    )
}