import React, { useState } from 'react';
import './App.css';
import logo from './logo-loja.png'; // Certifique-se de que o logo está na pasta src
import '@fortawesome/fontawesome-free/css/all.min.css'; // Adicione esta linha

function App() {
  const [selectedFio, setSelectedFio] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [otherMaterial, setOtherMaterial] = useState('');
  const [selectedFios, setSelectedFios] = useState('');
  const [selectedPingente, setSelectedPingente] = useState('');
  const [pingenteCount, setPingenteCount] = useState('');
  const [selectedFirma, setSelectedFirma] = useState('');
  const [selectedPassador, setSelectedPassador] = useState('');
  const [otherPassador, setOtherPassador] = useState('');
  const [selectedTamanho, setSelectedTamanho] = useState('');
  const [customTamanho, setCustomTamanho] = useState('');
  const [cep, setCep] = useState('');

  const handleWhatsAppClick = () => {
    const message = `Olá, gostaria de solicitar um orçamento para uma guia com as seguintes especificações:
    - Fio: ${selectedFio}
    - Material: ${selectedMaterial === 'outro' ? otherMaterial : selectedMaterial}
    - Quantidade de fios: ${selectedFios}
    - Pingente: ${selectedPingente === 'sim' ? `Sim, quantidade: ${pingenteCount}` : 'Não'}
    - Firma: ${selectedFirma}
    - Passador: ${selectedPassador === 'outro' ? otherPassador : selectedPassador}
    - Tamanho: ${selectedTamanho === 'personalizado' ? customTamanho : 'Padrão (Aprox. 55cm)'}
    - CEP: ${cep}`;
    const whatsappUrl = `https://wa.me/5551999821917?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A sua espiritualidade merece essa experiência.</h1>
        <h2>Monte sua guia para orçamento</h2>
        <div className="form-container">
          <div className="form-group">
            <label>1 - Qual fio?</label>
            <select value={selectedFio} onChange={(e) => setSelectedFio(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Fio encerado">Fio encerado</option>
              <option value="Nylon">Nylon</option>
              <option value="Tanto faz">Tanto faz</option>
            </select>
          </div>
          <div className="form-group">
            <label>2 - Qual material?</label>
            <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Miçanga">Miçanga</option>
              <option value="Cristal">Cristal</option>
              <option value="outro">Outro</option>
            </select>
            {selectedMaterial === 'outro' && (
              <input
                type="text"
                placeholder="Digite o material"
                value={otherMaterial}
                onChange={(e) => setOtherMaterial(e.target.value)}
              />
            )}
          </div>
          <div className="form-group">
            <label>3 - Quantos fios?</label>
            <select value={selectedFios} onChange={(e) => setSelectedFios(e.target.value)}>
              <option value="">Selecione</option>
              <option value="1 fio">1 fio</option>
              <option value="Detalhe de 3 fios">Detalhe de 3 fios</option>
              <option value="+ 2 fios">+ 2 fios</option>
            </select>
          </div>
          <div className="form-group">
            <label>4 - Pingente?</label>
            <select value={selectedPingente} onChange={(e) => setSelectedPingente(e.target.value)}>
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
            {selectedPingente === 'sim' && (
              <input
                type="text"
                placeholder="Quantos pingentes?"
                value={pingenteCount}
                onChange={(e) => setPingenteCount(e.target.value)}
              />
            )}
          </div>
          <div className="form-group">
            <label>5 - Firma?</label>
            <select value={selectedFirma} onChange={(e) => setSelectedFirma(e.target.value)}>
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>
          <div className="form-group">
            <label>6 - Passador?</label>
            <select value={selectedPassador} onChange={(e) => setSelectedPassador(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Caveira">Caveira</option>
              <option value="Flor">Flor</option>
              <option value="outro">Outro</option>
            </select>
            {selectedPassador === 'outro' && (
              <input
                type="text"
                placeholder="Qual passador?"
                value={otherPassador}
                onChange={(e) => setOtherPassador(e.target.value)}
              />
            )}
          </div>
          <div className="form-group">
            <label>7 - Tamanho?</label>
            <select value={selectedTamanho} onChange={(e) => setSelectedTamanho(e.target.value)}>
              <option value="">Selecione</option>
              <option value="padrão">Padrão (Aprox. 55cm)</option>
              <option value="personalizado">Personalizado</option>
            </select>
            {selectedTamanho === 'personalizado' && (
              <input
                type="text"
                placeholder="Quantos centímetros?"
                value={customTamanho}
                onChange={(e) => setCustomTamanho(e.target.value)}
              />
            )}
          </div>
          <div className="form-group">
            <label>8 - Digite seu CEP para facilitar o cálculo do frete:</label>
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <button className="whatsapp-button" onClick={handleWhatsAppClick}>Fale Conosco no WhatsApp</button>
        </div>
        <div className="social-buttons">
          <a
            href="https://www.instagram.com/filhadomar.loja/"
            className="social-button instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@filhadomar.loja"
            className="social-button tiktok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok"></i> TikTok
          </a>
        </div>
      </header>
      <footer>
        @filhadomar.loja
      </footer>
    </div>
  );
}

export default App;
