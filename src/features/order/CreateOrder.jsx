function CreateOrder() {
  return (
    <div>
      <h2>Ready to order? Let`&apos;`s go!</h2>

      <form>
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Give your order priority?</label>
        </div>

        <div>
          <button>Order now</button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
