import json

# This script helps generate the publication data structures
# Run this to verify the data structure is correct

conference_2024_2025 = [
    {
        "paper": "Comparative Study of Machine Learning Models for Diabetes Prediction",
        "authors": "Das A.K., Basak S., Choudhary S.",
        "doi": "10.1109/IEMENTech65115.2025.10959680",
        "conference": "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        "date": "January 31 - February 2, 2025"
    },
    {
        "paper": "A Brief Review on Photocatalytic Materials for Waste Water Treatment",
        "authors": "Saha P., Seth S., Saha S., Kundu S.K., Karmakar S.",
        "doi": "10.1109/IEMENTech65115.2025.10959605",
        "conference": "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        "date": "2025"
    }
]

print(f"Conference 2024-2025: {len(conference_2024_2025)} papers")
print(json.dumps(conference_2024_2025[0], indent=2))
