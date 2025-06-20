import React from "react";

export default function Useform({ data, updateFieldHandler }) {
  return (
    <div>
      <h2>Use Form</h2>

      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu E-mail"
          required
          value={data.email}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
}
