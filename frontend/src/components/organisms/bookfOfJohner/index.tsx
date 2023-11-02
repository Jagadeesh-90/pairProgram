import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { getMyBooks } from "../../../services";
import { ButtonComp } from "../../atoms/button";
import { useNavigate } from "react-router-dom";
export const BooksOfJohner = () => {
  const navigate=useNavigate();
  const [value, setValue] = React.useState("0");
  const [booksData, setBooks] = useState<any[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    getMyBooks()
    .then((res) => setBooks([...res.data]))
  }, []);

  const filterBooksByJohner = (johner: String) => {
    const result = booksData.filter((item: any) => {
      return item.johner === johner;
    });
    return result;
  };

  const comedyBooks = filterBooksByJohner("comedy");
  const actionBooks = filterBooksByJohner("action");
  const loveBooks = filterBooksByJohner("love");
  console.log(actionBooks)
console.log(booksData)
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="comedy" value="0" />
            <Tab label="action" value="1" />
            <Tab label="love" value="2" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <div>
            {comedyBooks.map((item) => (
              <li key={item.id}>{item.bookName}</li>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="1">
          {actionBooks.map((item) => (
            <li key={item.id}>{item.bookName}</li>
          ))}
        </TabPanel>
        <TabPanel value="2">
          {loveBooks.map((item) => (
            <li key={item.id}>{item.bookName}</li>
          ))}
        </TabPanel>
      </TabContext>
      <ButtonComp onClick={()=>navigate("/")}>back to form</ButtonComp>
    </Box>
  );
};
