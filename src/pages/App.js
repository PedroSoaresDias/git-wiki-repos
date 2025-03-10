import { useState } from "react";
import gitLogo from "../assets/github-mark-white.svg"
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { api } from "../services/api";

import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    
    alert("Repositório não encontrado");
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
      <Input value={currentRepo} onChange={event => setCurrentRepo(event.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} /> )}
    </Container>
  );
}

export default App;