class Batch(db.Model):
    __tablename__ = "batches"
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    notes = db.Column(db.Text)

    recipe = db.relationship("Recipe", back_populates="batches")
    units = db.relationship("BatchUnit", back_populates="batch", cascade="all, delete-orphan")

class BatchUnit(db.Model):
    __tablename__ = "batch_units"
    id = db.Column(db.Integer, primary_key=True)
    batch_id = db.Column(db.Integer, db.ForeignKey("batches.id"), nullable=False)

    identifier = db.Column(db.String(50))  
    # e.g. "Jar 1", "Plate A3", "Bag #7"

    status = db.Column(db.String(50), default="created")
    # created, sterilized, inoculated, contaminated, colonized, fruited, discarded, etc.

    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    batch = db.relationship("Batch", back_populates="units")
    sterilizations = db.relationship("Sterilization", back_populates="unit")
    inoculations = db.relationship("Inoculation", back_populates="unit")
    contaminations = db.relationship("Contamination", back_populates="unit")

class Sterilization(db.Model):
    __tablename__ = "sterilizations"
    id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(db.Integer, db.ForeignKey("batch_units.id"), nullable=False)
    method = db.Column(db.String(100))
    duration = db.Column(db.Integer)
    temperature = db.Column(db.Float)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    unit = db.relationship("BatchUnit", back_populates="sterilizations")

class Inoculation(db.Model):
    __tablename__ = "inoculations"
    id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(db.Integer, db.ForeignKey("batch_units.id"), nullable=False)
    culture_name = db.Column(db.String(100))
    method = db.Column(db.String(100))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    unit = db.relationship("BatchUnit", back_populates="inoculations")

class Contamination(db.Model):
    __tablename__ = "contaminations"
    id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(db.Integer, db.ForeignKey("batch_units.id"), nullable=False)
    contamination_type = db.Column(db.String(100))
    description = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    unit = db.relationship("BatchUnit", back_populates="contaminations")
