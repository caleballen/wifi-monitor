import fs from 'fs';

export default (req, res) => {
  const file = `/speed.csv`;
  res.setHeader('Content-disposition', `attachment; filename=speed.csv`);
  res.setHeader('Content-type', 'application/json');
  const filestream = fs.createReadStream(file);
  filestream.pipe(res);
};
