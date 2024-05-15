import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            alert(data.message); // Display success message
            // Clear form fields after successful signup
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        }
    };

    // Array of U.S. states
    const usStates = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
        "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ];

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia",
        "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland",
        "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
        "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
        "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
        "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (fmr. Macedonia)",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama","Qatar", "United States of America"

    ];


    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select
                    className="form-control"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select State</option>
                    {/* Map through usStates array to generate options */}
                    {usStates.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                    </select>
                    
                </div>
                <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
            >
                <option value="">Select Country</option>
                {/* Dynamically generate country options */}
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </div>
                <div className="form-group">
                    <label htmlFor="favoriteSport">Favorite Sport</label>
                    <select
                        className="form-control"
                        id="favoriteSport"
                        name="favoriteSport"
                        value={formData.favoriteSport}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Favorite Sport</option>
                        {/* Add sport options dynamically */}
                        {/* Example: <option value="football">Football</option> */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="favoriteStock">Favorite Stock</label>
                    <select
                        className="form-control"
                        id="favoriteStock"
                        name="favoriteStock"
                        value={formData.favoriteStock}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Favorite Stock</option>
                        {/* Add stock options dynamically */}
                        {/* Example: <option value="AAPL">Apple Inc.</option> */}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};


export default SignupForm;