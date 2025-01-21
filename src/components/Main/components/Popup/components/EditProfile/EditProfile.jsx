export default function EditProfile() {
  return (
    <form className="popup__form" name="card-form" id="new-card-form">
      <label className="popup__field">
        <input
          type="text"
          name="firstInput"
          id="user-name"
          className="popup__input popup__input_type_name"
          placeholder="Nome"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error" data-input="firstInput"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          name="secondInput"
          id="user-description"
          className="popup__input popup__input_type_description"
          placeholder="Sobre mim"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error" data-input="secondInput"></span>
      </label>

      <button type="submit" className="popup__submit-button">
        SALVAR
      </button>
    </form>
  );
}
