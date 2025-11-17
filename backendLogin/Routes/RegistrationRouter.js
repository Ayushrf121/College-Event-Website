const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = require("express").Router();
router.post("/register", async (req, res) => {
    try {
        const data = req.body;
        if (!data.name || !data.email || !data.phone || !data.course) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }
        // current working direc.
        // func(folder,file)
        const filepath = path.join(process.cwd(), 
      '..', 
      'event_manage_system_Frontend', 
      'component', 
      'EMS-JSON', 
      'Registration.json');

        let existingData = [];
        try {
            // utf-8 tell to read as text not binary
            const fileContent = await fs.readFile(filepath,"utf-8");
            existingData = JSON.parse(fileContent);
        } catch (error) {
            // create a direc. if not exist 
            await fs.mkdir(path.dirname(filepath), { recursive: true });
        }
        existingData.push({
            ...data
        });
        // save to file
        await fs.writeFile(filepath, JSON.stringify(existingData));
        res.json({ success: true, message: 'Registration saved successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
})

module.exports = router;