export default function NewCard() {
  return (
    <form className="popup__form" name="card-form" id="new-card-form">
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          name="firstInput"
          placeholder="Titulo"
          type="text"
          maxLength="30"
          minLength="2"
          required
        />
        <span className="popup__input-error" data-input="firstInput"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="secondInput"
          placeholder="URL da imagem"
          type="url"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error" data-input="secondInput"></span>
      </label>

      <button type="submit" className="popup__submit-button">
        CRIAR
      </button>
    </form>
  );
}
