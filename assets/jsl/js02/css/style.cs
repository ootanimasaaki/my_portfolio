@charset "utf-8";

* {
  margin: 0px;
  padding: 0px;
}

.container {
  width: 400px;
  margin: 16px auto;
}

h1 {
  margin: 0;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;
}

li input:checked + span {
  color: #aaa;
  text-decoration: line-through;
}

li input {
  margin-right: 8px;
}

li label {
  margin-right: 8px;
}

form {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

form input {
  flex: 1;
  padding: 4px;
}