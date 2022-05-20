function navbar (){
  return  `<form action="" id="form" onsubmit="Description(event)">
  <input type="text" name="" id="name" placeholder="name" required>
  <input type="text" name="" id="course" placeholder="course" required>
  <input type="number" name="" id="unit" placeholder="unit" required>
  <input type="url" name="" id="image" placeholder="image" required>
  <select name="" id="batch">
      <option value="web16" id="web16" >web16</option>
      <option value="web17" id="web17">web17</option>
  </select>
  <!-- <input type="text" name="" id="batch" placeholder="batch"> -->
  <input type="submit" />
  </form>
    `
}

    export {navbar}
